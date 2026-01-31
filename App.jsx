import React, { useState } from 'react';
import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";
import KodUtility from "./KodUtility";
import Governance from "./Governance";

// KITA GUNA LINK LUAR SUPAYA SENANG (Kalau tuan dah upload token.jpg, boleh tukar nanti)
const catImageLink = "https://i.ibb.co/L6qbwym/cat-token.jpg"; 

function App() {
  const [isVerified, setIsVerified] = useState(false);

  // --- LOGIK TOKEN ---
  const userTokenBalance = 10.0; 
  const minRequired = 1.0;
  const hasEnoughTokens = userTokenBalance >= minRequired;

  const handleVerify = async (proof) => {
    console.log("Menghantar bukti ke backend...", proof);
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(proof),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Verification failed on server");
    }
  };

  const onSuccess = (result) => {
    setIsVerified(true);
    alert("✅ Access Granted via World ID!");
  };

  // --- STYLE ---
  const styles = {
    wrapper: {
      backgroundColor: '#000000',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    },
    catImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      border: '4px solid #ff0000',
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
      margin: '0'
    },
    balanceCard: {
      backgroundColor: '#111',
      border: '1px solid #333',
      borderRadius: '16px',
      padding: '20px',
      width: '100%',
      maxWidth: '320px',
      margin: '20px 0'
    },
    btnVerify: {
      background: '#ff0000',
      color: 'white',
      border: 'none',
      padding: '16px 30px',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '300px',
      boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
      marginTop: '10px'
    }
  };

  if (isVerified) {
    return (
      <div style={styles.wrapper}>
        <h2 style={{color: '#ff0000'}}>🔓 ACCESS GRANTED</h2>
        <KodUtility />
        <Governance />
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      {/* Gambar Kucing */}
      <img src={catImageLink} alt="1414 Token" style={styles.catImage} />

      <h1 style={styles.title}>1414 ACCESS PORTAL</h1>
      <p style={{color: '#888', fontSize: '14px'}}>Exclusive entry for token holders.</p>

      {/* Kad Baki */}
      <div style={styles.balanceCard}>
        <div style={{color: '#888', fontSize: '12px'}}>Your Current Holding:</div>
        <div style={{fontSize: '32px', fontWeight: 'bold'}}>{userTokenBalance.toFixed(1)} 🇲🇾</div>
        <div style={{color: '#888', fontSize: '12px'}}>Ticker: 1414</div>
        <div style={{color: 'red', fontSize: '11px', marginTop: '10px'}}>
          Requirement: Must hold ≥ {minRequired} Token to enter.
        </div>
      </div>

      {/* Butang World ID */}
      {hasEnoughTokens ? (
        <IDKitWidget
          app_id="app_7147fcca529b9e4c5181157a356d9378"
          action="portal-akses-1414" // PASTIKAN NAMA NI ADA DALAM PORTAL (ACTIONS)
          verification_level={VerificationLevel.Orb}
          handleVerify={handleVerify}
          onSuccess={onSuccess}
        >
          {({ open }) => (
            <button onClick={open} style={styles.btnVerify}>
              Verify with World ID
            </button>
          )}
        </IDKitWidget>
      ) : (
        <p style={{color: 'red'}}>Insufficient Balance</p>
      )}
    </div>
  );
}

export default App;
 
