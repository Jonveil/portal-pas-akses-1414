import React, { useState } from 'react';
import KodUtility from "./KodUtility";
import Governance from "./Governance";

// Saya guna link luar yang stabil supaya gambar confirm keluar
const tokenImage = "https://i.ibb.co/L6qbwym/cat-token.jpg"; 

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const userTokenBalance = 10.0; // Simulasi
  const minRequired = 1.0;
  const hasEnoughTokens = userTokenBalance >= minRequired;

  const handleEnterPortal = () => {
    if (hasEnoughTokens) {
      setIsVerified(true);
    } else {
       alert("❌ Maaf, baki anda tidak mencukupi.");
    }
  };

  const styles = {
    wrapper: {
      backgroundColor: '#000000',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      userSelect: 'none', // 🔥 INI HALANG ORANG COPY TEKS
      WebkitUserSelect: 'none', // Untuk Safari/iPhone
    },
    catImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      border: '3px solid #ff0000',
      objectFit: 'cover',
      marginTop: '40px',
      marginBottom: '20px',
      boxShadow: '0 0 30px rgba(255, 0, 0, 0.6)'
    },
    title: {
      fontSize: '24px',
      fontWeight: '900',
      textTransform: 'uppercase',
      color: '#ff0000',
      margin: '0',
      letterSpacing: '1px'
    },
    balanceCard: {
      backgroundColor: '#111',
      border: '1px solid #333',
      borderRadius: '16px',
      padding: '20px',
      width: '100%',
      maxWidth: '320px',
      margin: '30px 0',
      boxShadow: 'inset 0 0 20px rgba(255,0,0,0.1)'
    },
    btnEnter: {
      background: '#ff0000',
      color: 'white',
      border: 'none',
      padding: '16px 40px',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '300px',
      boxShadow: '0 0 25px rgba(255, 0, 0, 0.5)',
      marginTop: '10px'
    }
  };

  if (isVerified) {
    return (
      <div style={{...styles.wrapper, justifyContent: 'flex-start'}}>
        <img src={tokenImage} style={{...styles.catImage, width: '60px', height: '60px', marginTop: '10px'}} />
        <h2 style={{color: '#ff0000', marginTop: '10px'}}>🔓 ACCESS GRANTED</h2>
        <p style={{color:'#888', fontSize:'12px'}}>Welcome to the Inner Circle.</p>
        <KodUtility />
        <Governance />
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <img src={tokenImage} alt="1414 Token" style={styles.catImage} />

      <h1 style={styles.title}>1414 ACCESS PORTAL</h1>
      <p style={{color: '#aaa', fontSize: '13px', marginTop: '5px'}}>Exclusive Token Gated Entry</p>

      <div style={styles.balanceCard}>
        <div style={{color: '#888', fontSize: '11px', textTransform: 'uppercase'}}>Your Holdings</div>
        <div style={{fontSize: '36px', fontWeight: 'bold', margin: '10px 0'}}>{userTokenBalance.toFixed(1)} <span style={{fontSize:'18px'}}>1414</span></div>
        
        {/* Status yang lebih profesional */}
        <div style={{borderTop: '1px solid #333', paddingTop: '15px', fontSize: '12px'}}>
            {hasEnoughTokens ? (
                <span style={{color: '#00ff00', fontWeight: 'bold'}}>✅ ELIGIBLE FOR ENTRY</span>
            ) : (
                <span style={{color: 'red', fontWeight: 'bold'}}>❌ INELIGIBLE (Need ≥{minRequired})</span>
            )}
        </div>
      </div>

      {hasEnoughTokens ? (
        <button onClick={handleEnterPortal} style={styles.btnEnter}>
          ENTER PORTAL
        </button>
      ) : (
        <div style={{padding:'15px', color:'#555', border:'1px solid #333', borderRadius:'10px', width:'100%', maxWidth:'300px'}}>
          Acquire tokens to proceed
        </div>
      )}
    </div>
  );
}

export default App;
