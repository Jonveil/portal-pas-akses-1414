import React, { useState } from 'react';

function App() {
  // State untuk kesan masuk (Login Effect)
  const [entered, setEntered] = useState(false);

  // --- GAYA/STYLE (TEMA MERAH & HITAM) ---
  const styles = {
    container: {
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Courier New', Courier, monospace",
      textAlign: 'center',
      padding: '20px',
      overflow: 'hidden', // Elak scroll
    },
    logoContainer: {
      marginBottom: '20px',
      position: 'relative',
    },
    catImage: {
      width: '180px',       // Besar sikit supaya jelas
      height: '180px',      // Sama tinggi & lebar supaya bulat cantik
      borderRadius: '50%',
      border: '4px solid #ff0000',
      boxShadow: '0 0 25px #ff0000', // Glow merah
      objectFit: 'cover',   // PENTING: Ini elak gambar jadi senget/lonjong
      backgroundColor: '#333', // Warna belakang kalau gambar loading
    },
    title: {
      fontSize: '2.5rem',
      color: '#ff0000',
      textShadow: '0 0 15px #ff0000',
      fontWeight: 'bold',
      letterSpacing: '2px',
      margin: '15px 0',
      textTransform: 'uppercase',
    },
    subtitle: {
      color: '#888',
      fontSize: '0.9rem',
      letterSpacing: '4px',
      marginBottom: '40px',
      textTransform: 'uppercase',
    },
    statusBox: {
      border: '1px solid #333',
      padding: '15px 30px',
      borderRadius: '10px',
      backgroundColor: '#0a0a0a',
      marginBottom: '40px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
      display: 'inline-block',
    },
    statusValue: {
      color: '#ff0000',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textShadow: '0 0 8px #ff0000',
      margin: 0,
    },
    enterButton: {
      backgroundColor: '#ff0000',
      color: 'white',
      border: 'none',
      padding: '18px 50px',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      cursor: 'pointer',
      boxShadow: '0 0 20px #ff0000',
      transition: 'all 0.3s ease',
      letterSpacing: '2px',
      marginTop: '10px',
    },
    // Gaya untuk halaman "SOON"
    soonContainer: {
      animation: 'fadeIn 1s ease-in',
      border: '2px solid #ff0000',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 0 30px #ff0000',
      backgroundColor: '#111',
    },
    soonText: {
      fontSize: '4rem',
      color: '#ff0000',
      fontWeight: 'bold',
      textShadow: '0 0 20px #ff0000',
      margin: 0,
    }
  };

  // --- SKRIN 2: HALAMAN "SOON" (LEPAS MASUK) ---
  if (entered) {
    return (
      <div style={styles.container}>
        <div style={styles.soonContainer}>
          <h1 style={styles.soonText}>SOON</h1>
          <p style={{marginTop: '20px', color: '#666', letterSpacing: '2px'}}>
            SYSTEM INITIALIZING...
          </p>
        </div>
        
        {/* Butang kecil untuk keluar balik (optional) */}
        <button 
          onClick={() => setEntered(false)}
          style={{marginTop: '50px', background: 'none', border: '1px solid #333', color: '#555', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer'}}
        >
          &larr; LOGOUT
        </button>
      </div>
    );
  }

  // --- SKRIN 1: HALAMAN UTAMA (LANDING PAGE) ---
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        {/* Gambar Alduin dipanggil dari folder public (root) */}
        <img 
          src="/alduin.jpg" 
          alt="Agent 1414" 
          style={styles.catImage}
          onError={(e) => {e.target.style.display='none'}} // Kalau gambar tak jumpa, dia hilang (tak ada icon rosak)
        />
      </div>

      <h1 style={styles.title}>PORTAL 1414</h1>
      <p style={styles.subtitle}>The Gate Opens</p>

      <div style={styles.statusBox}>
        <p style={{color:'#555', fontSize:'0.7rem', margin:'0 0 5px 0'}}>STATUS</p>
        <p style={styles.statusValue}>POWER UNLOCKS</p>
      </div>

      <button 
        style={styles.enterButton}
        onClick={() => setEntered(true)} // Tekan ni terus tukar state jadi "entered"
      >
        ENTER PORTAL
      </button>

      <footer style={{ marginTop: '60px', color: '#333', fontSize: '0.7rem' }}>
        &copy; 2026 1414 Corp. Secure Access.
      </footer>
    </div>
  );
}

export default App;
