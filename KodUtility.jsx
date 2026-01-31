import React, { useState, useEffect } from "react";

// 🔥 MASUKKAN ALAMAT WALLET TUAN DI SINI UNTUK JADI ADMIN 🔥
// Contoh: "0x5Af2204515d8A092Af4482607Cc0c6A17aafF4ba"
const ADMIN_WALLET = "0xMASUKKAN_WALLET_TUAN_DISINI"; 

function Utility({ currentUser }) { // Terima ID pengguna dari App.jsx
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  // Semak adakah saya Admin? (Case insensitive)
  const isAdmin = currentUser && ADMIN_WALLET && currentUser.toLowerCase() === ADMIN_WALLET.toLowerCase();

  // Semak adakah saya sudah post idea? (1 Orang 1 Undi)
  const hasPosted = ideas.some(idea => idea.ownerId && currentUser && idea.ownerId.toLowerCase() === currentUser.toLowerCase());

  // Load Data
  useEffect(() => {
    const savedIdeas = localStorage.getItem("my_ideas");
    if (savedIdeas) {
      setIdeas(JSON.parse(savedIdeas));
    } else {
      setIdeas([
        { id: 1, text: "Launch 1414 Hoodie", likes: 42, liked: false, ownerId: "system" },
      ]);
    }
  }, []);

  // Save Data
  useEffect(() => {
    localStorage.setItem("my_ideas", JSON.stringify(ideas));
  }, [ideas]);

  const toggleLike = (id) => {
    const updatedIdeas = ideas.map((idea) => {
      if (idea.id === id) {
        return { ...idea, likes: idea.liked ? idea.likes - 1 : idea.likes + 1, liked: !idea.liked };
      }
      return idea;
    });
    setIdeas(updatedIdeas.sort((a, b) => b.likes - a.likes)); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Check Login
    if (!currentUser) return alert("Please connect wallet to post!");
    
    // 2. Check 1 Post Rule (Kecuali Admin boleh post banyak)
    if (hasPosted && !isAdmin) return alert("You already have an active idea. Delete it to post a new one.");
    
    if (!newIdea) return;

    const newItem = { 
      id: Date.now(), 
      text: newIdea, 
      likes: 0, 
      liked: false,
      ownerId: currentUser // Cop ID owner pada idea
    };

    setIdeas([newItem, ...ideas]); 
    setNewIdea(""); 
  };

  // Logic Delete
  const handleDeleteClick = (id) => setShowDeleteConfirm(id);
  const confirmDelete = () => {
    const filteredIdeas = ideas.filter((idea) => idea.id !== showDeleteConfirm);
    setIdeas(filteredIdeas);
    setShowDeleteConfirm(null);
  };
  const cancelDelete = () => setShowDeleteConfirm(null);

  // --- STYLES ---
  const boxStyle = { backgroundColor: "#111", border: "1px solid #333", borderRadius: "16px", padding: "20px", marginBottom: "20px", color: "white", textAlign: "left" };
  const linkStyle = { textDecoration: 'none', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #222' };

  return (
    <div style={{paddingBottom: '80px', position: 'relative'}}>
      
      {/* MODAL DELETE */}
      {showDeleteConfirm && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{background: '#111', border: '1px solid #ff0000', borderRadius: '15px', padding: '25px', width: '80%', maxWidth: '300px', textAlign: 'center', boxShadow: '0 0 40px rgba(255,0,0,0.6)'}}>
            <h3 style={{color:'white', marginTop:0}}>⚠️ Delete Idea?</h3>
            <p style={{color:'#ccc', fontSize:'14px'}}>Remove this idea permanently?</p>
            <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
              <button onClick={cancelDelete} style={{flex:1, padding:'10px', borderRadius:'8px', border:'1px solid #555', background:'#222', color:'white'}}>CANCEL</button>
              <button onClick={confirmDelete} style={{flex:1, padding:'10px', borderRadius:'8px', border:'none', background:'#ff0000', color:'white', fontWeight:'bold'}}>DELETE</button>
            </div>
          </div>
        </div>
      )}

      {/* 1. LINKS & CRYPTO (Sama macam biasa) */}
      <div style={boxStyle}>
        <h3 style={{margin:'0 0 15px 0', color:'#ff0000', fontSize:'14px', textTransform:'uppercase'}}>🚀 OFFICIAL LINKS</h3>
        <a href="https://x.com/TarikNescafe" target="_blank" style={linkStyle}>
           <div style={{display:'flex', alignItems:'center', gap:'10px'}}><span style={{fontSize:'20px'}}>😺</span> <b>X (Twitter)</b></div><span style={{color:'#666'}}>➜</span>
        </a>
        <a href="https://t.me/+-GK8xB9X1b03MGU1" target="_blank" style={{...linkStyle, borderBottom:'none', marginBottom:0, paddingBottom:0}}>
           <div style={{display:'flex', alignItems:'center', gap:'10px'}}><span style={{fontSize:'20px'}}>😼</span> <b>Telegram Group</b></div><span style={{color:'#666'}}>➜</span>
        </a>
      </div>

      <div style={boxStyle}>
        <h3 style={{margin:'0 0 15px 0', color:'#ff0000', fontSize:'14px', textTransform:'uppercase'}}>💰 EARN CRYPTO</h3>
        <div style={{marginBottom:'15px'}}>
          <div style={{fontWeight:'bold', fontSize:'14px'}}>Luno (Free BTC)</div>
          <div style={{background:'#222', padding:'8px', borderRadius:'8px', display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'5px'}}>
             <code style={{color:'#ff0000'}}>4A2THW</code>
             <button onClick={() => {navigator.clipboard.writeText("4A2THW")}} style={{fontSize:'10px', padding:'5px 10px', background:'#444', border:'none', color:'white', borderRadius:'4px', cursor:'pointer'}}>COPY</button>
          </div>
          <a href="https://www.luno.com/invite/4A2THW" target="_blank" style={{fontSize:'12px', color:'#3498db', display:'block', marginTop:'5px'}}>Open Luno ➜</a>
        </div>
      </div>

      {/* 3. COMMUNITY VOICE (LOGIC BARU) */}
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'30px'}}>
         <h2 style={{color: '#ff0000', margin: 0, textTransform: 'uppercase', fontSize:'18px'}}>💡 Community Voice</h2>
         {isAdmin && <span style={{fontSize:'10px', background:'red', padding:'2px 6px', borderRadius:'4px', color:'white'}}>ADMIN MODE</span>}
      </div>
      
      <p style={{color:'#666', fontSize:'12px', marginBottom:'20px'}}>
         {hasPosted && !isAdmin ? "✅ You have posted an idea." : "Submit your idea (Max 1 per person)"}
      </p>
      
      {/* INPUT FORM (Disable kalau dah post) */}
      <form onSubmit={handleSubmit} style={{marginBottom:'20px', display:'flex', gap:'10px', opacity: (hasPosted && !isAdmin) ? 0.5 : 1}}>
         <input 
           type="text" 
           placeholder={hasPosted && !isAdmin ? "Delete old idea to post new..." : "Suggest an idea..."} 
           value={newIdea}
           disabled={hasPosted && !isAdmin} // Kunci kotak jika dah post
           onChange={(e)=>setNewIdea(e.target.value)}
           style={{flex:1, padding:'12px', borderRadius:'10px', border:'1px solid #333', background:'#111', color:'white', outline: 'none'}}
         />
         <button type="submit" disabled={hasPosted && !isAdmin} style={{padding:'0 20px', borderRadius:'10px', background: (hasPosted && !isAdmin) ? '#333' : '#ff0000', color:'white', border:'none', fontWeight:'bold', fontSize:'20px'}}>+</button>
      </form>

      {/* LIST IDEA */}
      <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
        {ideas.map((idea, index) => {
          // Check: Adakah ini idea saya?
          const isMine = currentUser && idea.ownerId && idea.ownerId.toLowerCase() === currentUser.toLowerCase();
          // Butang delete keluar jika: (Idea Saya) ATAU (Saya Admin)
          const canDelete = isMine || isAdmin;

          return (
            <div key={idea.id} style={{backgroundColor: '#111', border: idea.liked ? '1px solid #ff0000' : '1px solid #333', borderRadius: '12px', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{display:'flex', gap:'15px', alignItems:'center', flex:1}}>
                <div style={{fontSize:'18px', fontWeight:'900', color: index === 0 ? '#ff0000' : '#444'}}>#{index + 1}</div>
                <div style={{textAlign:'left', width:'100%'}}>
                   <div style={{color:'white', fontWeight:'bold', fontSize:'13px', wordBreak:'break-word'}}>{idea.text}</div>
                   
                   {/* 🔥 BUTANG DELETE MUNCUL JIKA LAYAK 🔥 */}
                   {canDelete && (
                      <div onClick={() => handleDeleteClick(idea.id)} style={{color:'#ff4444', fontSize:'10px', marginTop:'5px', cursor:'pointer', textDecoration:'underline', fontWeight:'bold'}}>
                          Delete {isAdmin && !isMine ? "(Admin Force)" : ""}
                      </div>
                   )}
                </div>
              </div>
              <button onClick={() => toggleLike(idea.id)} style={{background: idea.liked ? '#ff0000' : '#222', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', minWidth:'50px', display:'flex', alignItems:'center', gap:'5px', marginLeft:'10px'}}>
                <span>🔥</span> <span style={{fontSize:'12px', fontWeight:'bold'}}>{idea.likes}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Utility;
