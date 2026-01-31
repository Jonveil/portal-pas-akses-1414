import React, { useState } from 'react';
// Kita tak perlu import IDKitWidget buat masa ini
import KodUtility from "./KodUtility";
import Governance from "./Governance";

// INI CARA BETUL UNTUK IMPORT GAMBAR DARI FOLDER SRC
// Pastikan nama fail di GitHub ialah 'token.jpg'
import tokenImage from './token.jpg'; 

function App() {
  // State untuk tentukan sama ada pengguna dah berjaya masuk
  const [isVerified, setIsVerified] = useState(false);

  // --- LOGIK TOKEN (SIMULASI BETA) ---
  // Buat masa ini kita 'tipu' baki dia 10.0
  // Nanti kita akan sambung ke wallet sebenar (Metamask/World App)
  const userTokenBalance = 10.0; 
  const minRequired = 1.0;
  const hasEnoughTokens = userTokenBalance >= minRequired;

  // Fungsi bila tekan butang masuk
  const handleEnterPortal = () => {
    if (hasEnoughTokens) {
      setIsVerified(true);
      alert("✅ Baki mencukupi! Selamat datang ke Portal 1414.");
    } else {
       alert("❌ Baki tidak mencukupi.");
    }
  };

  // --- STYLE CSS (Tema Hitam & Merah) ---
  const styles = {
    wrapper: {
      backgroundColor: '#000000', // Hitam Pekat
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
      borderRadius: '50%', // Bulat
      border: '3px solid #ff0000', // Bingkai Merah
      objectFit: 'cover',
      marginTop: '30px',
      marginBottom: '20px',
      boxShadow: '0 0 30px rgba(255, 0, 0, 0.5)', // Kesan cahaya merah
      backgroundColor: '#222' // Warna latar belakang jika gambar loading
    },
    title: {
      fontSize: '26px',
      fontWeight: '900',
      textTransform: 'uppercase',
      color: '#ff0000', // Tulisan Merah
      margin: '5px 0',
      letterSpacing: '1px'
    },
    balanceCard: {
      backgroundColor: '#111',
      border: '1px solid #ff0000', // Bingkai merah nipis
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
      background: 'linear-gradient(135deg, #ff0000 0%, #b30000 100%)', // Gradien Merah
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

  // --- PAPARAN SELEPAS MASUK (PORTAL) ---
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

  // --- PAPARAN DEPAN (GATE) ---
  return (
    <div style={styles.wrapper}>
      
      {/* GAMBAR KUCING YANG DI-IMPORT */}
      <img src={tokenImage} alt="1414 Token" style={styles.catImage} />

      <h1 style={styles.title}>1414 ACCESS PORTAL</h1>
      <p style={{color: '#aaa', fontSize: '14px'}}>Exclusive Token Gated Entry</p>

      {/* KAD BAKI */}
      <div style={styles.balanceCard}>
        <div style={{color: '#888', fontSize: '12px', textTransform: 'uppercase'}}>Your Holdings</div>
        <div style={styles.balanceValue}>{userTokenBalance.toFixed(1)} <span style={{fontSize:'20px'}}>1414</span></div>
        
        {/* Status Syarat */}
        <div style={{marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #333'}}>
            {hasEnoughTokens ? (
                <span style={{color: '#00ff00', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    ✅ Requirement Met (≥{minRequired})
                </span>
            ) : (
                <span style={{color: 'red', fontWeight: 'bold'}}>
                    ❌ Insufficient Balance (Need ≥{minRequired})
                </span>
            )}
        </div>
      </div>

      {/* BUTANG MASUK (Hanya muncul jika cukup token) */}
      {hasEnoughTokens ? (
        <button onClick={handleEnterPortal} style={styles.btnEnter}>
          ENTER PORTAL
        </button>
      ) : (
        <div style={styles.disabledBtn}>
          Buy more 1414 tokens to enter
        </div>
      )}

    </div>
  );
}

export default App;
