import React, { useState } from 'react';
import { ConnectWallet, useAddress, useContract, useClaimNFT } from '@thirdweb-dev/react';

const CONTRACT_ADDRESS = "0x5107AA60424C1C7f3Bb1DF8BEcbA9FCCaF21C091";

function App() {
  const [entered, setEntered] = useState(false);
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { mutate: claim, isLoading: claiming } = useClaimNFT(contract);

  const handleClaim = () => {
    if (!address) {
      alert("Sila connect wallet dulu!");
      return;
    }

    claim(
      { to: address, quantity: 1 },
      {
        onSuccess: (data) => {
          alert("✅ Claim berjaya! Tx: " + data.transactionHash);
        },
        onError: (err) => {
          alert("❌ Claim gagal: " + (err.message || "Cuba lagi"));
        },
      }
    );
  };

  // Styles kau yang lama (copy-paste dari kod lama kau)
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
    },
    innerContainer: {
      width: '100%',
      maxWidth: '400px',
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
          <h1 style={{color: '#ff0000', fontSize: '1.8rem', letterSpacing: '2px', marginBottom:'5px'}}>
            AGENT 1414
          </h1>
          <p style={{color: '#444', fontSize: '0.8rem', letterSpacing:'2px'}}>
            ACCESS GRANTED
          </p>

          <div style={styles.nftCard}>
            <div style={{width:'100%', height:'180px', background:'#1a1a1a', borderRadius:'15px', marginBottom:'20px', overflow:'hidden', border:'1px solid #333'}}>
              <img src="/alduin.jpg" style={{width:'100%', height:'100%', objectFit:'cover'}} alt="NFT Preview"/>
            </div>
            <h3 style={{color:'white', margin:'0 0 5px 0', fontSize:'1.4rem'}}>
              GENESIS PASS
            </h3>
            <p style={{color:'#666', fontSize:'0.8rem', margin:0}}>
              Official World Chain Pass • Free
            </p>

            <p style={{color:'#888', fontSize:'0.75rem', margin:'15px 0'}}>
              NFT ini bagi access eksklusif ke komuniti 1414, update, event & future drops.
            </p>

            {!address ? (
              <ConnectWallet />
            ) : (
              <button
                onClick={handleClaim}
                disabled={claiming}
                style={{
                  ...styles.claimButton,
                  backgroundColor: claiming ? '#666' : 'white',
                  color: claiming ? '#999' : 'black',
                }}
              >
                {claiming ? "CLAIMING..." : "CLAIM NFT →"}
              </button>
            )}
          </div>

          <button
            onClick={() => setEntered(false)}
            style={{
              marginTop: '50px',
              background: 'none',
              border: '1px solid #333',
              padding: '10px 30px',
              borderRadius: '20px',
              color: '#666',
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}
          >
            LOGOUT
          </button>
        </div>
      </div>
    );
  }

  // Halaman luar (masuk)
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src="/alduin.jpg" alt="Agent 1414" style={styles.catImage} />
      </div>

      <h1 style={styles.title}>PORTAL 1414</h1>
      <p style={styles.subtitle}>The Gate Opens</p>

      <div style={styles.statusBox}>
        <p style={{color:'#444', fontSize:'0.7rem', margin:'0 0 8px 0', letterSpacing:'2px'}}>
          SYSTEM STATUS
        </p>
        <p style={{color: '#ff0000', fontSize: '1.2rem', fontWeight: 'bold', margin: 0, textShadow: '0 0 8px #ff0000'}}>
          ONLINE
        </p>
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
