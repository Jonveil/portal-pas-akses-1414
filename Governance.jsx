import React from "react";
import tokenImage from './alduin.jpg'; // Guna gambar kucing tuan

function Governance() {
  // Simulasi Progress Jualan
  const total = 1414;
  const sold = 890; // Contoh dah terjual sikit
  const percentage = (sold / total) * 100;

  const cardStyle = {
    background: 'linear-gradient(145deg, #111, #0a0a0a)',
    border: '1px solid #333',
    borderRadius: '20px',
    padding: '20px',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const phaseStyle = (active) => ({
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '15px', borderRadius: '12px', marginBottom: '10px',
    border: active ? '1px solid #ff0000' : '1px solid #222',
    background: active ? '#1a0000' : '#111',
    opacity: active ? 1 : 0.5
  });

  return (
    <div style={{paddingBottom:'80px'}}>
      
      {/* HEADER GAMBAR NFT */}
      <div style={{textAlign:'center', marginBottom:'30px'}}>
         <img src={tokenImage} style={{
             width: '180px', height: '180px', borderRadius: '20px', 
             border: '4px solid #ff0000', objectFit: 'cover',
             boxShadow: '0 0 30px rgba(255,0,0,0.3)'
         }} />
         <h1 style={{fontSize:'24px', color:'white', margin:'15px 0 5px 0', textTransform:'uppercase'}}>1414 Agent Card</h1>
         <p style={{color:'#ff0000', fontSize:'12px', letterSpacing:'2px'}}>GENESIS COLLECTION</p>
      </div>

      {/* STATISTIK SUPPLY */}
      <div style={cardStyle}>
         <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', fontSize:'12px', color:'#ccc'}}>
            <span>Minted</span>
            <span>{sold} / {total}</span>
         </div>
         {/* Progress Bar */}
         <div style={{height:'10px', width:'100%', background:'#333', borderRadius:'5px', overflow:'hidden'}}>
            <div style={{height:'100%', width: `${percentage}%`, background:'#ff0000'}}></div>
         </div>
      </div>

      {/* FASA JUALAN */}
      <h3 style={{color:'white', fontSize:'16px', marginBottom:'15px'}}>MINT PHASES</h3>
      
      {/* Fasa 1 (Aktif) */}
      <div style={phaseStyle(true)}>
         <div style={{textAlign:'left'}}>
            <div style={{color:'#ff0000', fontWeight:'bold', fontSize:'12px'}}>PHASE 1 (LIVE)</div>
            <div style={{color:'white', fontWeight:'bold'}}>Early Bird</div>
         </div>
         <div style={{textAlign:'right'}}>
            <div style={{color:'white', fontWeight:'bold'}}>1 USDC</div>
            <div style={{color:'#00ff00', fontSize:'10px'}}>Active</div>
         </div>
      </div>

      {/* Fasa 2 */}
      <div style={phaseStyle(false)}>
         <div style={{textAlign:'left'}}>
            <div style={{color:'#666', fontWeight:'bold', fontSize:'12px'}}>PHASE 2</div>
            <div style={{color:'#aaa', fontWeight:'bold'}}>Public</div>
         </div>
         <div style={{textAlign:'right'}}>
            <div style={{color:'#aaa', fontWeight:'bold'}}>2 USDC</div>
            <div style={{color:'#666', fontSize:'10px'}}>Locked</div>
         </div>
      </div>

      {/* Fasa 3 */}
      <div style={phaseStyle(false)}>
         <div style={{textAlign:'left'}}>
            <div style={{color:'#666', fontWeight:'bold', fontSize:'12px'}}>PHASE 3</div>
            <div style={{color:'#aaa', fontWeight:'bold'}}>Final Call</div>
         </div>
         <div style={{textAlign:'right'}}>
            <div style={{color:'#aaa', fontWeight:'bold'}}>3 USDC</div>
            <div style={{color:'#666', fontSize:'10px'}}>Locked</div>
         </div>
      </div>

      {/* BUTANG MINT */}
      <button style={{
          background: '#ff0000', color: 'white', border: 'none', padding: '18px 0',
          borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer',
          width: '100%', marginTop: '20px', boxShadow: '0 0 20px rgba(255,0,0,0.5)'
      }} onClick={()=> alert("Minting Function coming soon!")}>
         MINT NOW (1 USDC)
      </button>

    </div>
  );
}

export default Governance;
