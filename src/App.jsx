import React, { useState } from 'react';
import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit';

function App() {
  const [entered, setEntered] = useState(false);
  const [verifiedForClaim, setVerifiedForClaim] = useState(false);

  // ✅ LINK MINT (Thirdweb – World Chain)
  const MINT_LINK = "https://thirdweb.com/world-chain/0xa72DABf4F0f4Ce102D17B006e4CCB34EC74351D4";

  // ✅ WORLD ID CONFIG
  const APP_ID = "app_7147fcca529b9e4c5181157a356d9378";

  // ✅ ACTION ID
  const ACTION_ENTER_PORTAL = "1hank-4ou";
  const ACTION_CLAIM_NFT = "551f41cf-e2ba-4a75-b4e9-d4fc57af3409";

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
      width: '100%',
    },
    catImage: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      border: '4px solid #ff0000',
      boxShadow: '0 0 40px #ff0000',
      objectFit: 'cover',
      transform: 'scale(1.0)',
      backgroundColor: '#111',
    },
    title: {
      fontSize: '2.5rem',
      color: '#ff0000',
      textShadow: '0 0 20px #ff0000',
      fontWeight: '900',
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
      padding: '20px 70px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      cursor: 'pointer',
      boxShadow: '0 0 30px #ff0000',
      letterSpacing: '3px',
      marginTop: '10px',
      transition: 'transform 0.2s',
    },
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
    },
    verifyButton: {
      backgroundColor: '#ff0000',
      color: 'white',
      border: 'none',
      padding: '12px 0',
      width: '100%',
      borderRadius: '30px',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      cursor: 'pointer',
      marginTop: '15px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    disabledButton: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    smallText: {
      color: '#666',
      fontSize: '0.7rem',
      marginTop: '8px',
      letterSpacing: '1px',
    }
  };

  // --- HALAMAN DALAM (LEPAS VERIFY MASUK) ---
  if (entered) {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <h1 style={{color: '#ff0000', fontSize: '1.8rem', letterSpacing: '2px', marginBottom:'5px'}}>AGENT 1414</h1>
          <p style={{color: '#444', fontSize: '0.8rem', letterSpacing:'2px'}}>ACCESS GRANTED</p>

          <div style={styles.nftCard}>
            <div style={{width:'100%', height:'180px', background:'#1a1a1a', borderRadius:'15px', marginBottom:'20px', overflow:'hidden', border:'1px solid #333'}}>
              <img src="/alduin.jpg" style={{width:'100%', height:'100%', objectFit:'cover'}} alt="NFT Preview"/>
            </div>
            <h3 style={{color:'white', margin:'0 0 5px 0', fontSize:'1.4rem'}}>GENESIS PASS</h3>
            <p style={{color:'#666', fontSize:'0.8rem', margin:0}}>Official World Chain Pass • Free</p>

            {/* STEP 1: VERIFY TO CLAIM (World ID – Action CLAIM NFT) */}
            {!verifiedForClaim && (
              <>
                <IDKitWidget
                  app_id={APP_ID}
                  action={ACTION_CLAIM_NFT}
                  verification_level={VerificationLevel.Orb}
                  onSuccess={() => setVerifiedForClaim(true)}
                >
                  {({ open }) => (
                    <button
                      type="button"
                      onClick={open}
                      style={styles.verifyButton}
                    >
                      VERIFY TO CLAIM
                    </button>
                  )}
                </IDKitWidget>
                <p style={styles.smallText}>World ID verification required before claiming.</p>
              </>
            )}

            {/* STEP 2: CLAIM NFT (Gated by verification) */}
            {verifiedForClaim && (
              <>
                <a
                  href={MINT_LINK}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.claimButton}
                >
                  CLAIM NFT (WORLD CHAIN) →
                </a>
                <p style={styles.smallText}>You are verified. Complete claim in this portal.</p>
              </>
            )}
          </div>

          <button
            onClick={() => {
              setEntered(false);
              setVerifiedForClaim(false);
            }}
            style={{
              marginTop: '50px',
              background: 'none',
              border: '1px solid #333',
              padding:'10px 30px',
              borderRadius:'20px',
              color: '#666',
              fontSize:'0.8rem',
              cursor:'pointer'
            }}
          >
            LOGOUT
          </button>
        </div>
      </div>
    );
  }

  // --- HALAMAN LUAR (SEBELUM MASUK) ---
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img
          src="/alduin.jpg"
          alt="Agent 1414"
          style={styles.catImage}
          onError={(e) => { e.target.style.display='none'; }}
        />
      </div>

      <h1 style={styles.title}>PORTAL 1414</h1>
      <p style={styles.subtitle}>The Gate Opens</p>

      <div style={styles.statusBox}>
        <p style={{color:'#444', fontSize:'0.7rem', margin:'0 0 8px 0', letterSpacing:'2px'}}>SYSTEM STATUS</p>
        <p style={{color: '#ff0000', fontSize: '1.2rem', fontWeight: 'bold', margin: 0, textShadow: '0 0 8px #ff0000'}}>ONLINE</p>
      </div>

      {/* ENTER → World ID (Action ENTER PORTAL) */}
      <IDKitWidget
        app_id={APP_ID}
        action={ACTION_ENTER_PORTAL}
        verification_level={VerificationLevel.Orb}
        onSuccess={() => setEntered(true)}
      >
        {({ open }) => (
          <button
            style={styles.enterButton}
            onClick={open}
          >
            ENTER
          </button>
        )}
      </IDKitWidget>

      <footer style={{ marginTop: '80px', color: '#333', fontSize: '0.6rem', letterSpacing:'2px' }}>
        SECURE CONNECTION ESTABLISHED
      </footer>
    </div>
  );
}

export default App;
