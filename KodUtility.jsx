import React, { useState, useEffect } from "react";

function Utility() {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState("");
  
  // State untuk Delete Modal (Kotak Amaran)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null); // Simpan ID yang nak didelete

  // Load Data
  useEffect(() => {
    const savedIdeas = localStorage.getItem("my_ideas");
    if (savedIdeas) {
      setIdeas(JSON.parse(savedIdeas));
    } else {
      setIdeas([
        { id: 1, text: "Launch 1414 Hoodie", likes: 42, liked: false },
        { id: 2, text: "Collab with Worldcoin", likes: 25, liked: false },
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
    if (!newIdea) return;
    const newItem = { id: Date.now(), text: newIdea, likes: 0, liked: false };
    setIdeas([newItem, ...ideas]); 
    setNewIdea(""); 
  };

  // 🔥 FUNGSI DELETE BARU (Tanpa Window Confirm)
  const handleDeleteClick = (id) => {
    setShowDeleteConfirm(id); // Buka kotak amaran untuk ID ini
  };

  const confirmDelete = () => {
    const filteredIdeas = ideas.filter((idea) => idea.id !== showDeleteConfirm);
    setIdeas(filteredIdeas);
    setShowDeleteConfirm(null); // Tutup kotak
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(null); // Tutup kotak tanpa delete
  };

  // --- STYLES ---
  const boxStyle = {
    backgroundColor: "#111", border: "1px solid #333", borderRadius: "16px",
    padding: "20px", marginBottom: "20px", color: "white", textAlign: "left"
  };

  const linkStyle = {
    textDecoration: 'none', color: '#ffffff', display: 'flex',
    alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px',
    paddingBottom: '15px', borderBottom: '1px solid #222'
  };

  return (
    <div style={{paddingBottom: '80px', position: 'relative'}}>
      
      {/* --- KOTAK AMARAN CUSTOM (MODAL) --- */}
      {showDeleteConfirm && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            background: '#111', border: '1px solid #ff0000', borderRadius: '15px',
            padding: '25px', width: '80%', maxWidth: '300px', textAlign: 'center',
            boxShadow: '0 0 30px rgba(255,0,0,0.5)'
          }}>
            <h3 style={{color:'white', marginTop:0}}>⚠️ Delete Idea?</h3>
            <p style={{color:'#ccc', fontSize:'14px'}}>Are you sure you want to remove this idea permanently?</p>
            <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
              <button onClick={cancelDelete} style={{flex:1, padding:'10px', borderRadius:'8px', border:'1px solid #555', background:'#333', color:'white'}}>CANCEL</button>
              <button onClick={confirmDelete} style={{flex:1, padding:'10px', borderRadius:'8px', border:'none', background:'#ff0000', color:'white', fontWeight:'bold'}}>DELETE</button>
            </div>
          </div>
        </div>
      )}

      {/* 1. PAUTAN UTAMA */}
      <div style={boxStyle}>
        <h3 style={{margin:'0 0 15px 0', color:'#ff0000', fontSize:'14px', textTransform:'uppercase'}}>🚀 OFFICIAL LINKS</h3>
        <a href="https://x.com/TarikNescafe" target="_blank" style={linkStyle}>
           <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
             <span style={{fontSize:'20px'}}>😺</span> <b>X (Twitter)</b>
           </div>
           <span style={{color:'#666'}}>➜</span>
        </a>
        <a href="https://t.me/+-GK8xB9X1b03MGU1" target="_blank" style={{...linkStyle, borderBottom:'none', marginBottom:0, paddingBottom:0}}>
           <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
             <span style={{fontSize:'20px'}}>😼</span> <b>Telegram Group</b>
           </div>
           <span style={{color:'#666'}}>➜</span>
        </a>
      </div>

      {/* 2. JANA CRYPTO */}
      <div style={boxStyle}>
        <h3 style={{margin:'0 0 15px 0', color:'#ff0000', fontSize:'14px', textTransform:'uppercase'}}>💰 EARN CRYPTO</h3>
        <div style={{marginBottom:'15px'}}>
          <div style={{fontWeight:'bold', fontSize:'14px'}}>Luno (Free BTC)</div>
          <p style={{fontSize:'11px', color:'#888', margin:'5px 0'}}>Deposit & buy crypto, get rewards.</p>
          <div style={{background:'#222', padding:'8px', borderRadius:'8px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <code style={{color:'#ff0000'}}>4A2THW</code>
             <button onClick={() => {navigator.clipboard.writeText("4A2THW")}} style={{fontSize:'10px', padding:'5px 10px', background:'#444', border:'none', color:'white', borderRadius:'4px', cursor:'pointer'}}>COPY</button>
          </div>
          <a href="https://www.luno.com/invite/4A2THW" target="_blank" style={{fontSize:'12px', color:'#3498db', display:'block', marginTop:'5px'}}>Open Luno ➜</a>
        </div>
        <div>
          <div style={{fontWeight:'bold', fontSize:'14px'}}>Binance</div>
          <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=id&ref=GRO_28502_GT4C5&utm_source=default" target="_blank" style={{fontSize:'12px', color:'#FCD535', textDecoration:'none', fontWeight:'bold'}}>
            Join Binance & Earn ➜
          </a>
        </div>
      </div>

      {/* 3. COMMUNITY VOICE */}
      <h2 style={{color: '#ff0000', margin: '30px 0 10px 0', textTransform: 'uppercase', fontSize:'18px'}}>💡 Community Voice</h2>
      
      <form onSubmit={handleSubmit} style={{marginBottom:'20px', display:'flex', gap:'10px'}}>
         <input type="text" placeholder="Suggest an idea..." value={newIdea} onChange={(e)=>setNewIdea(e.target.value)} style={{flex:1, padding:'12px', borderRadius:'10px', border:'1px solid #333', background:'#111', color:'white', outline: 'none'}} />
         <button type="submit" style={{padding:'0 20px', borderRadius:'10px', background:'#ff0000', color:'white', border:'none', fontWeight:'bold', fontSize:'20px'}}>+</button>
      </form>

      <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
        {ideas.map((idea, index) => (
          <div key={idea.id} style={{backgroundColor: '#111', border: idea.liked ? '1px solid #ff0000' : '1px solid #333', borderRadius: '12px', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{display:'flex', gap:'15px', alignItems:'center', flex:1}}>
              <div style={{fontSize:'18px', fontWeight:'900', color: index === 0 ? '#ff0000' : '#444'}}>#{index + 1}</div>
              <div style={{textAlign:'left'}}>
                 <div style={{color:'white', fontWeight:'bold', fontSize:'13px', wordBreak:'break-word'}}>{idea.text}</div>
                 <div onClick={() => handleDeleteClick(idea.id)} style={{color:'#555', fontSize:'10px', marginTop:'5px', cursor:'pointer', textDecoration:'underline'}}>Delete</div>
              </div>
            </div>
            <button onClick={() => toggleLike(idea.id)} style={{background: idea.liked ? '#ff0000' : '#222', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', minWidth:'50px', display:'flex', alignItems:'center', gap:'5px', marginLeft:'10px'}}>
              <span>🔥</span> <span style={{fontSize:'12px', fontWeight:'bold'}}>{idea.likes}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Utility;
