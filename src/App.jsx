import React, { useState } from 'react';

function App() {
  const [entered, setEntered] = useState(false);

  // --- STYLE ---
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
      overflow: 'hidden',
    },
    logoContainer: {
      marginBottom: '20px',
      position: 'relative',
    },
    catImage: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      border: '4px solid #ff0000',
      boxShadow: '0 0 25px #ff0000',
      objectFit: 'cover',
      // --- KUCING TEGAK (PUSING KIRI SIKIT) ---
      transform: 'rotate(-10deg) scale(1.1)', 
      transition: 'transform 0.5s ease',
      backgroundColor: '#111',
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
    // Styles untuk Halaman Dalam
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
    nftTitle: {
      color: 'white',
      fontSize: '1.2rem',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    nftDesc: {
      color: '#888',
      fontSize: '0.8rem',
      marginBottom: '20px',
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
      width: '100%',
    }
  };

  // --- HALAMAN DALAM (DASHBOARD) ---
  if (entered) {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <h1 style={{color: '#ff0000', fontSize: '2rem'}}>WELCOME AGENT</h1>
          <p style={{color: '#666', marginBottom: '40px'}}>ID: 1414-ACCESS-GRANTED</p>

          {/* KOTAK NFT ZORA (FREE CLAIM) */}
          <div style={styles.nftCard}>
            <div style={{
              width: '100%', height: '150px', backgroundColor: '#222', 
              borderRadius: '10px', marginBottom: '15px', 
              backgroundImage: 'url(/alduin.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'
            }}></div>
            
            <h3 style={styles.nftTitle}>GENESIS PASS (FREE)</h3>
            <p style={styles.nftDesc}>
              Limited to 1414 Agents only. <br/>
              Minted on Optimism Network.
            </p>
            
            {/* LINK ZORA AKAN DILETAK DI SINI NANTI */}
            <a href="https://zora.co" target="_blank" rel="noreferrer" style={styles.claimButton}>
              MINT NOW &rarr;
            </a>
          </div>

          <button 
            onClick={() => setEntered(false)}
            style={{marginTop: '30px', background: 'none', border: 'none', color: '#555', cursor: 'pointer'}}
          >
            LOGOUT
          </button>
        </div>
      </div>
    );
  }

  // --- HALAMAN DEPAN (COVER) ---
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

      <div style={{
        border: '1px solid #333', padding: '15px 30px', borderRadius: '10px', 
        backgroundColor: '#0a0a0a', marginBottom: '40px', 
        boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
      }}>
        <p style={{color:'#555', fontSize:'0.7rem', margin:'0 0 5px 0'}}>STATUS</p>
        <p style={{color: '#ff0000', fontSize: '1.2rem', fontWeight: 'bold', margin: 0, textShadow: '0 0 8px #ff0000'}}>
          POWER UNLOCKS
        </p>
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
