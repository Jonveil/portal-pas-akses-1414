import React, { useState } from 'react';

function App() {
  const [entered, setEntered] = useState(false);

  // --- STYLE ---
  const styles = {
    container: {
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      width: '100vw',        // Wajib penuh skrin
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Courier New', Courier, monospace",
      textAlign: 'center',
      padding: '20px',
      overflowX: 'hidden',   // Elak scroll tepi
      boxSizing: 'border-box'
    },
    logoContainer: {
      marginBottom: '20px',
      position: 'relative',
      display: 'flex',       // Pastikan container logo pun center
      justifyContent: 'center',
      width: '100%',
    },
    catImage: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      border: '4px solid #ff0000',
      boxShadow: '0 0 30px #ff0000', // Glow lebih kuat
      objectFit: 'cover',
      // --- UPDATE: Pusing lagi sikit (-20deg) & Zoom sikit ---
      transform: 'rotate(-20deg) scale(1.2)', 
      transition: 'transform 0.5s ease',
      backgroundColor: '#111',
    },
    title: {
      fontSize: '2.5rem',
      color: '#ff0000',
      textShadow: '0 0 15px #ff0000',
      fontWeight: 'bold',
      letterSpacing: '4px', // Jarakkan huruf supaya nampak lebar & center
      margin: '15px 0',
      textTransform: 'uppercase',
      width: '100%',        // Paksa text duduk tengah
    },
    subtitle: {
      color: '#888',
      fontSize: '0.9rem',
      letterSpacing: '6px', // Jarakkan lagi
      marginBottom: '40px',
      textTransform: 'uppercase',
    },
    statusBox: {
      border: '1px solid #333',
      padding: '15px 40px',
      borderRadius: '12px',
      backgroundColor: '#0a0a0a',
      marginBottom: '40px',
      boxShadow: '0 5px 20px rgba(255,0,0,0.2)', // Shadow merah sikit
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
      padding: '18px 60px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      cursor: 'pointer',
      boxShadow: '0 0 25px #ff0000',
      transition: 'all 0.3s ease',
      letterSpacing: '2px',
      marginTop: '10px',
    },
    // Styles Halaman Dalam (Maintain)
    innerContainer: {
      width: '100%',
      maxWidth: '400px',
      animation: 'fadeIn 0.5s ease-in',
    },
    nftCard: {
      border: '1px solid #333',
      backgroundColor: '#111',
      borderRadius: '15px',
      padding: '20px',
      marginTop: '30px',
      boxShadow: '0 10px 30px rgba(255, 0, 0, 0.1)',
    },
    claimButton: {
      backgroundColor: 'white',
      color: 'black',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '25px',
      fontWeight: 'bold',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '15px',
    }
  };

  // --- HALAMAN DALAM ---
  if (entered) {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <h1 style={{color: '#ff0000', fontSize: '2rem', letterSpacing: '2px'}}>WELCOME AGENT</h1>
          <p style={{color: '#666', marginBottom: '40px'}}>ID: 1414-ACCESS-GRANTED</p>

          <div style={styles.nftCard}>
             {/* Gambar placeholder sementara */}
             <div style={{width:'100%', height:'150px', background:'#222', borderRadius:'10px', marginBottom:'15px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <span style={{color:'#555'}}>NFT PREVIEW</span>
             </div>
            <h3 style={{color:'white', margin:'0 0 10px 0'}}>GENESIS PASS (FREE)</h3>
            <p style={{color:'#888', fontSize:'0.8rem'}}>World Chain Edition.</p>
            <a href="https://zora.co" target="_blank" rel="noreferrer" style={styles.claimButton}>
              MINT ON WORLD CHAIN &rarr;
            </a>
          </div>

          <button onClick={() => setEntered(false)} style={{marginTop: '40px', background: 'none', border: 'none', color: '#555', cursor: 'pointer'}}>LOGOUT</button>
        </div>
      </div>
    );
  }

  // --- HALAMAN DEPAN ---
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img 
          src="/alduin.jpg" 
          alt="Agent 1414" 
          style={styles.catImage}
          onError={(e) => {e.target.style.display='none'}} 
        />
      </div>

      <h1 style={styles.title}>PORTAL 1414</h1>
      <p style={styles.subtitle}>The Gate Opens</p>

      <div style={styles.statusBox}>
        <p style={{color:'#555', fontSize:'0.7rem', margin:'0 0 5px 0', textTransform:'uppercase'}}>System Status</p>
        <p style={styles.statusValue}>POWER UNLOCKS</p>
      </div>

      <button style={styles.enterButton} onClick={() => setEntered(true)}>
        ENTER PORTAL
      </button>

      <footer style={{ marginTop: '60px', color: '#333', fontSize: '0.7rem' }}>
        &copy; 2026 1414 Corp.
      </footer>
    </div>
  );
}

export default App;
