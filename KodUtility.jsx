import React from "react";

function Utility() {
  
  const boxStyle = {
    backgroundColor: "#111",
    border: "1px solid #333",
    borderRadius: "15px",
    padding: "20px",
    marginBottom: "20px",
    color: "white",
    textAlign: "left"
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px'
  };

  return (
    <div style={{paddingBottom: '50px'}}>
      <h2 style={{color: '#ff0000', marginBottom: '20px', textTransform: 'uppercase'}}>Official Links</h2>

      {/* 1. SOCIALS */}
      <div style={boxStyle}>
        <h3 style={{marginTop:0, color:'#888', fontSize:'14px'}}>COMMUNITY</h3>
        
        {/* Twitter / X */}
        <a href="https://x.com/TarikNescafe" target="_blank" style={linkStyle}>
           <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
             <span style={{fontSize:'24px'}}>😺</span>
             <span style={{fontWeight:'bold'}}>X (Twitter)</span>
           </div>
           <span style={{color:'#555'}}>➜</span>
        </a>

        <hr style={{borderColor:'#222', margin:'10px 0'}}/>

        {/* Telegram */}
        <a href="https://t.me/+-GK8xB9X1b03MGU1" target="_blank" style={linkStyle}>
           <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
             <span style={{fontSize:'24px'}}>😼</span>
             <span style={{fontWeight:'bold'}}>Telegram Group</span>
           </div>
           <span style={{color:'#555'}}>➜</span>
        </a>
      </div>

      {/* 2. EARN CRYPTO */}
      <div style={boxStyle}>
        <h3 style={{marginTop:0, color:'#888', fontSize:'14px'}}>EARN CRYPTO</h3>
        
        {/* LUNO */}
        <div style={{marginBottom:'20px'}}>
          <div style={{fontWeight:'bold', marginBottom:'5px'}}>Luno Rewards</div>
          <p style={{fontSize:'12px', color:'#aaa', margin:0}}>
            Sign up and deposit to get free Bitcoin (BTC).
          </p>
          <div style={{background:'#222', padding:'10px', marginTop:'8px', borderRadius:'8px', display:'flex', justifyContent:'space-between', alignItems:'center', border:'1px solid #444'}}>
             <code style={{color:'#ff0000', fontSize:'16px', fontWeight:'bold'}}>4A2THW</code>
             <button onClick={() => {navigator.clipboard.writeText("4A2THW"); alert("Code Copied!")}} style={{fontSize:'10px', padding:'5px 10px', background:'#444', border:'none', color:'white', borderRadius:'4px', cursor:'pointer'}}>COPY</button>
          </div>
          <a href="https://www.luno.com/invite/4A2THW" target="_blank" style={{fontSize:'12px', color:'#3498db', display:'block', marginTop:'8px'}}>Open Luno Account ➜</a>
        </div>

        <hr style={{borderColor:'#222', margin:'15px 0'}}/>

        {/* BINANCE */}
        <div>
          <div style={{fontWeight:'bold', marginBottom:'5px'}}>Binance Referral</div>
          <p style={{fontSize:'12px', color:'#aaa', margin:0}}>
            Join the world's largest exchange via this link.
          </p>
          <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=id&ref=GRO_28502_GT4C5&utm_source=default" target="_blank" style={{
            display:'block', 
            marginTop:'10px', 
            background:'#FCD535', 
            color:'black', 
            padding:'10px', 
            textAlign:'center', 
            borderRadius:'8px', 
            fontWeight:'bold',
            textDecoration:'none'
          }}>
            Join Binance ➜
          </a>
        </div>
      </div>

    </div>
  );
}

export default Utility;
