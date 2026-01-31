import React, { useState } from "react";
import tokenImage from './alduin.jpg'; 

function Governance() {
  // Simulasi Data Jualan
  const total = 1414;
  const [sold, setSold] = useState(890); // Mula dengan 890
  const [isMinting, setIsMinting] = useState(false);
  const [hasMinted, setHasMinted] = useState(false);

  // Kira peratusan untuk bar merah
  const percentage = (sold / total) * 100;

  const handleMint = () => {
    if (hasMinted) return; // Kalau dah beli, tak boleh beli lagi

    setIsMinting(true); // Mula loading

    // Simulasi Blockchain Delay (2 saat)
    setTimeout(() => {
      setSold(sold + 1); // Tambah nombor jualan
      setHasMinted(true); // Set status dah beli
      setIsMinting(false); // Stop loading
      // Tiada popup alert, semua berlaku di butang
    }, 2000);
  };

  // --- STYLES ---
  const cardStyle = {
    background: 'linear-gradient(145deg, #111, #0a0a0a)',
    border: '1px solid #333', borderRadius: '20px',
    padding: '20px', textAlign: 'center', marginBottom: '20px'
  };

  const phaseStyle = (active) => ({
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '15px', borderRadius: '12px', marginBottom: '10px',
    border: active ? '1px solid #ff0000' : '1px solid #222',
    background: active ? '#1a0000' : '#111',
    opacity: active ? 1 : 0.5
  });

  return (
    <div style={{paddingBottom:'100px'}}>
      
      {/* HEADER */}
      <div style={{textAlign:'center', marginBottom:'30px'}}>
         <img src={tokenImage} style={{
             width: '180px', height: '180px', borderRadius: '20px', 
             border: '4px solid #ff0000', objectFit: 'cover',
             boxShadow: '0 0 40px rgba(255,0,0,0.4)'
         }} />
         <h1 style={{fontSize:'24px', color:'white', margin:'15px 0 5px 0', textTransform:'uppercase'}}>1414 Agent Card</h1>
         <p style={{color:'#ff0000', fontSize:'12px', letterSpacing:'2px', margin:0}}>GENESIS COLLECTION</p>
      </div>

      {/* PROGRESS BAR */}
      <div style={cardStyle}>
         <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', fontSize:'12px', color:'#ccc'}}>
            <span>Minted</span>
            <span style={{color: hasMinted ? '#00ff00' : 'white', fontWeight:'bold'}}>
                {sold} / {total}
            </span>
         </div>
         <div style={{height:'10px', width:'100%', background:'#333', borderRadius:'5px', overflow:'hidden'}}>
            <div style={{
                height:'100%', 
                width: `${percentage}%`, 
                background: hasMinted ? '#00ff00' : '#ff0000',
                transition: 'width 0.5s ease'
            }}></div>
         </div>
      </div>

      {/* MINT PHASES */}
      <h3 style={{color:'white', fontSize:'14px', marginBottom:'15px', textTransform:'uppercase', color:'#888'}}>Mint Schedule</h3>
      
      <div style={phaseStyle(true)}>
         <div>
            <div style={{color:'#ff0000', fontWeight:'bold', fontSize:'12px'}}>PHASE 1 (LIVE)</div>
            <div style={{color:'white', fontWeight:'bold', fontSize:'14px'}}>Early Bird</div>
         </div>
         <div style={{textAlign:'right'}}>
            <div style={{color:'white', fontWeight:'bold'}}>1 USDC</div>
            <div style={{color:'#00ff00', fontSize:'10px'}}>Active</div>
         </div>
      </div>

      <div style={phaseStyle(false)}>
         <div>
            <div style={{color:'#666', fontWeight:'bold', fontSize:'12px'}}>PHASE 2</div>
            <div style={{color:'#aaa', fontWeight:'bold', fontSize:'14px'}}>Public</div>
         </div>
         <div style={{textAlign:'right'}}>
            <div style={{color:'#aaa', fontWeight:'bold'}}>2 USDC</div>
            <div style={{color:'#666', fontSize:'10px'}}>Locked</div>
         </div>
      </div>

      {/* BUTANG MINT INTERAKTIF */}
      <div style={{
          position: 'fixed', bottom: '90px', left: '0', width: '100%', 
          padding: '0 20px', boxSizing: 'border-box'
      }}>
        <button 
          onClick={handleMint}
          disabled={isMinting || hasMinted}
          style={{
            background: hasMinted ? '#111' : (isMinting ? '#555' : '#ff0000'), 
            color: hasMinted ? '#00ff00' : 'white', 
            border: hasMinted ? '1px solid #00ff00' : 'none', 
            padding: '18px 0',
            borderRadius: '15px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            cursor: hasMinted ? 'default' : 'pointer',
            width: '100%', 
            boxShadow: hasMinted ? 'none' : '0 0 25px rgba(255,0,0,0.4)',
            transition: 'all 0.3s'
          }}
        >
           {isMinting ? "⏳ PROCESSING..." : (hasMinted ? "✅ YOU OWN THIS NFT" : "MINT NOW (1 USDC)")}
        </button>
      </div>

    </div>
  );
}

export default Governance;
