import React, { useState } from "react";
import ClaimNFT from "./components/ClaimNFT";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {!entered ? (
        <>
          <img
            src="/alduin.jpg"
            alt="Agent 1414"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "4px solid red",
              boxShadow: "0 0 40px red",
              objectFit: "cover",
            }}
          />

          <h1
            style={{
              fontSize: "2.5rem",
              color: "red",
              textShadow: "0 0 20px red",
              marginTop: "20px",
            }}
          >
            PORTAL 1414
          </h1>

          <button
            onClick={() => setEntered(true)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "20px 70px",
              fontSize: "1.2rem",
              borderRadius: "50px",
              marginTop: "40px",
              cursor: "pointer",
              boxShadow: "0 0 30px red",
            }}
          >
            ENTER
          </button>
        </>
      ) : (
        <>
          <ClaimNFT />

          <button
            onClick={() => setEntered(false)}
            style={{
              marginTop: "40px",
              background: "none",
              border: "1px solid #333",
              padding: "10px 30px",
              borderRadius: "20px",
              color: "#666",
              cursor: "pointer",
            }}
          >
            LOGOUT
          </button>
        </>
      )}
    </div>
  );
}
