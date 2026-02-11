import React, { useState, useEffect } from "react";

function Utility() {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [formMsg, setFormMsg] = useState("");

  // Identity
  const [myId, setMyId] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // INIT
  useEffect(() => {
    let storedId = localStorage.getItem("portal_user_id");
    if (!storedId) {
      storedId = "user_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
      localStorage.setItem("portal_user_id", storedId);
    }
    setMyId(storedId);

    const adminStatus = localStorage.getItem("portal_is_admin");
    if (adminStatus === "true") setIsAdmin(true);

    const savedIdeas = localStorage.getItem("my_ideas");
    if (savedIdeas) {
      setIdeas(JSON.parse(savedIdeas));
    } else {
      setIdeas([
        { id: 1, text: "Launch 1414 Hoodie", likes: 42, liked: false, ownerId: "system" },
        { id: 2, text: "Collab with Worldcoin", likes: 25, liked: false, ownerId: "system" },
      ]);
    }
  }, []);

  // SAVE
  useEffect(() => {
    localStorage.setItem("my_ideas", JSON.stringify(ideas));
  }, [ideas]);

  const hasPosted = ideas.some((idea) => idea.ownerId === myId);

  const toggleLike = (id) => {
    const updated = ideas.map((idea) =>
      idea.id === id
        ? { ...idea, likes: idea.liked ? idea.likes - 1 : idea.likes + 1, liked: !idea.liked }
        : idea
    );
    setIdeas(updated.sort((a, b) => b.likes - a.likes));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMsg("");

    // Admin backdoor
    if (newIdea === "#admin1414") {
      setIsAdmin(true);
      localStorage.setItem("portal_is_admin", "true");
      setFormMsg("🔓 ADMIN MODE ACTIVATED");
      setNewIdea("");
      return;
    }

    if (hasPosted && !isAdmin) {
      setFormMsg("⚠️ You already posted. Delete old idea first.");
      return;
    }

    if (!newIdea) return;

    const newItem = {
      id: Date.now(),
      text: newIdea,
      likes: 0,
      liked: false,
      ownerId: myId,
    };

    setIdeas([newItem, ...ideas]);
    setNewIdea("");
    setFormMsg("✅ Idea submitted!");
    setTimeout(() => setFormMsg(""), 3000);
  };

  const confirmDelete = () => {
    setIdeas(ideas.filter((idea) => idea.id !== showDeleteConfirm));
    setShowDeleteConfirm(null);
  };

  const box = {
    backgroundColor: "#111",
    border: "1px solid #333",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "20px",
    color: "white",
  };

  return (
    <div style={{ paddingBottom: "80px", position: "relative", color: "white" }}>
      {/* DELETE MODAL */}
      {showDeleteConfirm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#111",
              border: "1px solid #ff0000",
              borderRadius: "15px",
              padding: "25px",
              width: "80%",
              maxWidth: "300px",
              textAlign: "center",
              boxShadow: "0 0 40px rgba(255,0,0,0.6)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>⚠️ Delete Idea?</h3>
            <p style={{ color: "#ccc", fontSize: "14px" }}>Remove this idea permanently?</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button
                onClick={() => setShowDeleteConfirm(null)}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #555",
                  background: "#222",
                  color: "white",
                }}
              >
                CANCEL
              </button>

              <button
                onClick={confirmDelete}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#ff0000",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COMMUNITY VOICE */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ color: "#ff0000", textTransform: "uppercase", fontSize: "18px" }}>
          💡 Community Voice
        </h2>
        {isAdmin && (
          <span
            style={{
              fontSize: "10px",
              background: "red",
              padding: "2px 6px",
              borderRadius: "4px",
              color: "white",
            }}
          >
            ADMIN MODE
          </span>
        )}
      </div>

      <p style={{ color: "#666", fontSize: "12px", marginBottom: "10px" }}>
        Submit your idea (Max 1 per person)
      </p>

      {/* INPUT */}
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "5px",
          display: "flex",
          gap: "10px",
          opacity: hasPosted && !isAdmin ? 0.5 : 1,
        }}
      >
        <input
          type="text"
          placeholder={
            hasPosted && !isAdmin ? "Delete old idea to post new..." : "Suggest an idea..."
          }
          value={newIdea}
          disabled={hasPosted && !isAdmin}
          onChange={(e) => setNewIdea(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #333",
            background: "#111",
            color: "white",
          }}
        />
        <button
          type="submit"
          disabled={hasPosted && !isAdmin}
          style={{
            padding: "0 20px",
            borderRadius: "10px",
            background: hasPosted && !isAdmin ? "#333" : "#ff0000",
            color: "white",
            border: "none",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          +
        </button>
      </form>

      {/* STATUS */}
      {formMsg && (
        <div
          style={{
            color: formMsg.includes("✅") || formMsg.includes("🔓") ? "#00ff00" : "#ff4444",
            fontSize: "12px",
            marginBottom: "20px",
            padding: "10px",
            background: "#111",
            border: "1px dashed #333",
            borderRadius: "8px",
          }}
        >
          {formMsg}
        </div>
      )}

      {/* IDEA LIST */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {ideas.map((idea, index) => {
          const isMine = idea.ownerId === myId;
          const canDelete = isMine || isAdmin;

          return (
            <div
              key={idea.id}
              style={{
                backgroundColor: "#111",
                border: idea.liked ? "1px solid #ff0000" : "1px solid #333",
                borderRadius: "12px",
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", gap: "15px", alignItems: "center", flex: 1 }}>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "900",
                    color: index === 0 ? "#ff0000" : "#444",
                  }}
                >
                  #{index + 1}
                </div>

                <div style={{ textAlign: "left", width: "100%" }}>
                  <div
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "13px",
                      wordBreak: "break-word",
                    }}
                  >
                    {idea.text}
                  </div>

                  {canDelete && (
                    <div
                      onClick={() => setShowDeleteConfirm(idea.id)}
                      style={{
                        color: "#ff4444",
                        fontSize: "10px",
                        marginTop: "5px",
                        cursor: "pointer",
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Delete {isAdmin && !isMine ? "(Admin Force)" : ""}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => toggleLike(idea.id)}
                style={{
                  background: idea.liked ? "#ff0000" : "#222",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  minWidth: "50px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginLeft: "10px",
                }}
              >
                <span>🔥</span>
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>{idea.likes}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Utility;
