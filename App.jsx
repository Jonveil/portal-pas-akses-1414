import React, { useState } from 'react';
import KodUtility from "./KodUtility";
import Governance from "./Governance";

// KITA GUNA LINK INI SEBAB FAIL 'token.jpg' TAK JUMPA DALAM GITHUB
const tokenImage = "https://i.ibb.co/L6qbwym/cat-token.jpg"; 

function App() {
  const [isVerified, setIsVerified] = useState(false);

  // --- LOGIK BETA (TANPA WORLD ID) ---
  const userTokenBalance = 10.0; 
  const minRequired = 1.0;
  const hasEnoughTokens = userTokenBalance >= minRequired;

  const handleEnterPortal = () => {
    if (hasEnoughTokens) {
      setIsVerified(true);
      alert("✅ Balance Verified! Welcome to 1414 Portal.");
    } else {
       alert("❌ Insufficient Balance.");
    }
  };

  // --- STYLE (HITAM & MERAH) ---
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
      padding: '20px'
    },
    catImage: {
      width: '130px',
      height: '130px',
      borderRadius: '50%',
      border: '4px solid #ff0000',
      objectFit: 'cover',
      marginTop: '30px',
      marginBottom: '20px',
      boxShadow: '0 0 30px rgba(255, 0, 0, 0.5)',
      backgroundColor: '#222'
    },
    title: {
      fontSize: '26px',
      fontWeight: '900',
      textTransform: 'uppercase',
      color: '#ff0000',
      margin: '5px 0',
      letterSpacing: '1px'
    },
    balanceCard: {
      backgroundColor: '#111',
      border: '1px solid #ff0000',
      borderRadius: '16px',
      padding: '25px',
      width: '100%',
      maxWidth: '320px',
      margin: '30px 0',
      boxShadow: 'inset 0 0 20px rgba(255,0,0,0.1)'
    },
    balanceValue: {
        fontSize: '38px',
        fontWeight: 'bold',
        color: 'white',
        margin: '10px 0'
    },
    btnEnter: {
      background: 'linear-gradient(135deg, #ff0000 0%, #b30000 100%)',
      color: 'white',
      border: 'none',
      padding: '18px 40px',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '300px',
      boxShadow: '0 0 25px rgba(255, 0, 0, 0.4)',
      marginTop: '10px',
      transition: 'transform 0.2s'
    },
    disabledBtn: {
        background: '#333',
        color: '#777',
        border: '1px solid #444',
        padding: '15px',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '300px',
        cursor: 'not-allowed'
    }
  };

  if (isVerified) {
    return (
      <div style={{...styles.wrapper, justifyContent: 'flex-start'}}>
        <img src={tokenImage} style={{...styles.catImage, width: '60px', height: '60px', marginTop: '10px'}} />
        <h2 style={{color: '#ff0000', marginTop: '10px'}}>🔓 ACCESS GRANTED</h2>
        <KodUtility />
        <Governance />
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <img src={tokenImage} alt="1414 Token" style={styles.catImage} />

      <h1 style={styles.title}>1414 ACCESS PORTAL</h1>
      <p style={{color: '#aaa', fontSize: '14px'}}>Exclusive Token Gated Entry</p>

      <div style={styles.balanceCard}>
        <div style={{color: '#888', fontSize: '12px', textTransform: 'uppercase'}}>Your Holdings</div>
        <div style={styles.balanceValue}>{userTokenBalance.toFixed(1)} <span style={{fontSize:'20px'}}>1414</span></div>
        
        <div style={{marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #333'}}>
            {hasEnoughTokens ? (
                <span style={{color: '#00ff00', fontWeight: 'bold'}}>
                    ✅ Requirement Met (≥{minRequired})
                </span>
            ) : (
                <span style={{color: 'red', fontWeight: 'bold'}}>
                    ❌ Insufficient Balance
                </span>
            )}
        </div>
      </div>

      {hasEnoughTokens ? (
        <button onClick={handleEnterPortal} style={styles.btnEnter}>
          ENTER PORTAL
        </button>
      ) : (
        <div style={styles.disabledBtn}>Buy tokens to enter</div>
      )}

    </div>
  );
}

export default App;
