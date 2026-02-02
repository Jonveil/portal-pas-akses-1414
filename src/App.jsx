import React, { useState } from 'react';

function App() {
  const [entered, setEntered] = useState(false);

  // --- STYLE ---
  const styles = {
    container: {
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Courier New', Courier, monospace",
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    logoContainer: {
      marginBottom: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    catImage: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      border: '4px solid #ff0000',
      boxShadow: '0 0 35px #ff0000', // Glow kuat
      objectFit: 'cover',
      // SAYA DAH BUANG "ROTATE". KUCING AKAN TEGAK SEKARANG.
      transform: 'scale(1.0)', 
      backgroundColor: '#111',
    },
    title: {
      fontSize: '2.5rem',
      color: '#ff0000',
      textShadow: '0 0 20px #ff0000',
      fontWeight: '900', // Paling tebal
      letterSpacing: '5px',
      margin: '10px 0',
      textTransform: 'uppercase',
      lineHeight: '1.2',
    },
    subtitle: {
      color: '#888',
      fontSize: '0.8rem',
      letterSpacing: '6px',
      marginBottom: '50px',
      textTransform: 'uppercase',
      borderBottom: '1px solid #333',
      paddingBottom: '10px',
      display: 'inline-block',
    },
    statusBox: {
      border: '1px solid #222',
      padding: '15px 40px',
      borderRadius: '12px',
      backgroundColor: '#050505',
      marginBottom: '40px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.5)',
    },
    enterButton: {
      backgroundColor: '#ff0000',
      color: 'white',
      border: 'none',
      padding: '20px 70px', // Butang lebih lebar
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      cursor: 'pointer',
      boxShadow: '0 0 30px #ff0000',
      letterSpacing: '3px',
      marginTop: '10px',
      transition: 'transform 0.2s',
    },
    // --- HALAMAN DALAM ---
    innerContainer: {
      width: '100%',
      maxWidth: '400px',
      animation: 'fadeIn 0.8s ease-out',
    },
    nftCard: {
      border: '1px solid #333',
      background: 'linear-gradient(145deg, #111, #000)',
      borderRadius: '20px',
      padding: '25px',
      marginTop: '30px',
      boxShadow: '0 10px 40px rgba(255, 0, 0, 0.15)',
    },
    claimButton: {
      backgroundColor: 'white',
      color: 'black',
      border: 'none',
      padding: '15px 0',
      width: '100%',
      borderRadius: '30px',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'block',
      marginTop: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    }
  };

  if (entered) {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <h1 style={{color: '#ff0000', fontSize: '1.8rem', letterSpacing: '2px', marginBottom:'5px'}}>AGENT 1414</h1>
          <p style={{color: '#444', fontSize: '0.8rem', letterSpacing:'2px'}}>ACCESS GRANTED</p>

          <div style={styles.nftCard}>
             <div style={{width:'100%', height:'180px', background:'#1a1a1a', borderRadius:'15px', marginBottom:'20px', overflow:'hidden', border:'1px solid #333'}}>
                {/* Letak gambar NFT sebenar di sini nanti */}
                <img src="/alduin.jpg" style={{width:'100%', height:'100%', objectFit:'cover'}} />
             </div>
            <h3 style={{color:'white', margin:'0 0 5px 0', fontSize:'1.4rem'}}>GENESIS PASS</h3>
            <p style={{color:'#666', fontSize:'0.8rem', margin:0}}>Edition of 1414 • Optimism Network</p>
            
            {/* LINK ZORA DI SINI */}
            <a href="https://zora.co" target="_blank" rel="noreferrer" style={styles.claimButton}>
              MINT FREE NFT &rarr;
            </a>
          </div>

          <button onClick={() => setEntered(false)} style={{marginTop: '50px', background: 'none', border: '1px solid #333', padding:'10px 30px', borderRadius:'20px', color: '#666', fontSize:'0.8rem'}}>
            LOGOUT
          </button>
        </div>
      </div>
    );
  }

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
        <p style={{color:'#444', fontSize:'0.7rem', margin:'0 0 8px 0', letterSpacing:'2px'}}>SYSTEM STATUS</p>
        <p style={styles.statusValue}>ONLINE</p>
      </div>

      <button style={styles.enterButton} onClick={() => setEntered(true)}>
        ENTER
      </button>

      <footer style={{ marginTop: '80px', color: '#333', fontSize: '0.6rem', letterSpacing:'2px' }}>
        SECURE CONNECTION ESTABLISHED
      </footer>
    </div>
  );
}

export default App;
