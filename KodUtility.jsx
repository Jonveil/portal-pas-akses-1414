import React, { useState } from "react";

function Utility() {
  const [claimed, setClaimed] = useState(false);
  const [name, setName] = useState("");

  function handleClaim(e) {
    e.preventDefault();
    if (!name) return alert("Sila masukkan nama!");
    setClaimed(true);
    alert("✅ Ganjaran berjaya dituntut!");
  }

  const boxStyle = {
    backgroundColor: "#111",
    border: "1px solid #333",
    borderRadius: "15px",
    padding: "20px",
    marginBottom: "20px",
    color: "white",
    textAlign: "left"
  };

  return (
    <div>
      <h2 style={{color: '#ff0000', marginBottom: '20px'}}>🔧 Member Utility</h2>

      {/* 1. TUNTUTAN HARIAN */}
      <div style={boxStyle}>
        <h3 style={{margin:'0 0 10px 0', fontSize:'16px'}}>🎁 Tuntutan Harian</h3>
        {!claimed ? (
          <form onSubmit={handleClaim}>
            <input 
              type="text" 
              placeholder="Nama anda..." 
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "8px", border: "1px solid #444", background: "#222", color: "white"}} 
            />
            <button type="submit" style={{width: "100%", padding: "12px", background: "#ff0000", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold"}}>
              Tuntut Ganjaran
            </button>
          </form>
        ) : (
          <p style={{color: "#00ff00", margin:0}}>✅ Anda telah menuntut hari ini!</p>
        )}
      </div>

      {/* 2. PAUTAN EKSKLUSIF */}
      <div style={boxStyle}>
        <h3 style={{margin:'0 0 15px 0', fontSize:'16px'}}>🔗 Pautan Rasmi</h3>
        <ul style={{paddingLeft: "20px", color: "#ccc", lineHeight: '1.8'}}>
          <li>
            <a href="https://t.me/+-GK8xB9X1b03MGU1" target="_blank" style={{color: "#3498db", textDecoration:'none', fontWeight:'bold'}}>
               ✈️ Group Telegram Rasmi
            </a>
          </li>
          <li>
             <span style={{color:'#888'}}>Borang Whitelist (Coming Soon)</span>
          </li>
        </ul>
      </div>

      {/* 3. JANA PENDAPATAN (LUNO & BINANCE) */}
      <div style={boxStyle}>
        <h3 style={{margin:'0 0 10px 0', fontSize:'16px'}}>💰 Jana Crypto Percuma</h3>
        
        {/* LUNO */}
        <div style={{marginBottom:'15px', borderBottom:'1px solid #333', paddingBottom:'15px'}}>
          <p style={{margin:'0 0 5px 0', color:'#fff'}}><strong>Luno (Dapat RM25 BTC)</strong></p>
          <p style={{fontSize:'12px', color:'#888', margin:0}}>Daftar & beli crypto RM250, dapat RM25 percuma.</p>
          <div style={{background:'#222', padding:'10px', marginTop:'5px', borderRadius:'5px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <code style={{color:'#ff0000', fontSize:'16px'}}>4A2THW</code>
             <button onClick={() => {navigator.clipboard.writeText("4A2THW"); alert("Kod disalin!")}} style={{fontSize:'10px', padding:'5px 10px'}}>SALIN</button>
          </div>
          <a href="https://www.luno.com/invite/4A2THW" target="_blank" style={{fontSize:'12px', color:'#3498db', display:'block', marginTop:'5px'}}>Buka akaun Luno di sini</a>
        </div>

        {/* BINANCE */}
        <div>
          <p style={{margin:'0 0 5px 0', color:'#fff'}}><strong>Binance (Diskaun Fee)</strong></p>
          <a href="https://accounts.binance.com/register?ref=YOUR_CODE_HERE" target="_blank" style={{fontSize:'12px', color:'#3498db'}}>Daftar Binance di sini</a>
          <p style={{fontSize:'10px', color:'#666', marginTop:'2px'}}>*Anda boleh letak link affiliate anda nanti.</p>
        </div>
      </div>

    </div>
  );
}

export default Utility;
