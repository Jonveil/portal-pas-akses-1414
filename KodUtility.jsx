import React, { useState } from "react";

function Utility() {
  // --- LOGIK UNDIAN (DUMMY) ---
  const [ideas, setIdeas] = useState([
    { id: 1, text: "Buat Baju Hoodie 1414", likes: 42, liked: false },
    { id: 2, text: "Collab dengan Worldcoin", likes: 25, liked: false },
    { id: 3, text: "Party Makan-makan KL", likes: 15, liked: false },
  ]);

  const [newIdea, setNewIdea] = useState("");

  const toggleLike = (id) => {
    const updatedIdeas = ideas.map((idea) => {
      if (idea.id === id) {
        return { ...idea, likes: idea.liked ? idea.likes - 1 : idea.likes + 1, liked: !idea.liked };
      }
      return idea;
    });
    setIdeas(updatedIdeas.sort((a, b) => b.likes - a.likes)); // Auto susun
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newIdea) return;
    alert("✅ Idea submitted! Waiting for approval.");
    setNewIdea("");
  };

  // --- STYLE ---
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
    <div style={{paddingBottom: '80px'}}>
      
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
          <p style={{fontSize:'11px', color:'#888', margin:'5px 0'}}>Deposit & buy RM250 crypto, get RM25 free.</p>
          <div style={{background:'#222', padding:'8px', borderRadius:'8px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <code style={{color:'#ff0000'}}>4A2THW</code>
             <button onClick={() => {navigator.clipboard.writeText("4A2THW"); alert("Copied!")}} style={{fontSize:'10px', padding:'5px 10px', background:'#444', border:'none', color:'white', borderRadius:'4px'}}>COPY</button>
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

      {/* 3. COMMUNITY IDEAS (DIPINDAHKAN KE SINI) */}
      <h2 style={{color: '#ff0000', margin: '30px 0 10px 0', textTransform: 'uppercase', fontSize:'18px'}}>💡 Community Voice</h2>
      <p style={{color:'#666', fontSize:'12px', marginBottom:'20px'}}>Top voted ideas will be prioritized.</p>

      {/* List Idea */}
      <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
        {ideas.map((idea, index) => (
          <div key={idea.id} style={{
            backgroundColor: '#111', border: idea.liked ? '1px solid #ff0000' : '1px solid #333',
            borderRadius: '12px', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <div style={{display:'flex', gap:'15px', alignItems:'center'}}>
              <div style={{fontSize:'18px', fontWeight:'900', color:'#444'}}>#{index + 1}</div>
              <div style={{color:'white', fontWeight:'bold', fontSize:'13px'}}>{idea.text}</div>
            </div>
            <button onClick={() => toggleLike(idea.id)} style={{
                background: idea.liked ? '#ff0000' : '#222', color: 'white', border: 'none',
                padding: '5px 10px', borderRadius: '8px', cursor: 'pointer', minWidth:'40px'
              }}>
              🔥 <span style={{fontSize:'12px', fontWeight:'bold'}}>{idea.likes}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Submit Form */}
      <form onSubmit={handleSubmit} style={{marginTop:'20px', display:'flex', gap:'10px'}}>
         <input 
           type="text" 
           placeholder="Write your idea here..." 
           value={newIdea}
           onChange={(e)=>setNewIdea(e.target.value)}
           style={{flex:1, padding:'12px', borderRadius:'10px', border:'1px solid #333', background:'#000', color:'white'}}
         />
         <button type="submit" style={{padding:'0 15px', borderRadius:'10px', background:'#333', color:'white', border:'none', fontWeight:'bold'}}>+</button>
      </form>

    </div>
  );
}

export default Utility;
