import React, { useState } from 'react';
import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";
import KodUtility from "./KodUtility";
import Governance from "./Governance";

function App() {
  // State untuk tentukan sama ada pengguna dah lepas verification
  const [isVerified, setIsVerified] = useState(false);

  // --- BAHAGIAN LOGIK TOKEN (SIMULASI) ---
  // Nanti kita akan sambung ini ke smart contract sebenar menggunakan Ethers.js
  // Buat masa ini, kita 'tipu' dulu kata dia ada 10 token supaya butang muncul.
  const userTokenBalance = 10.0; // CONTOH BAKI
  const minRequired = 1.0;
  const hasEnoughTokens = userTokenBalance >= minRequired;
  // ---------------------------------------

  const handleVerify = async (proof) => {
    // Panggil API backend kita untuk semak kesahihan di server
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(proof),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Verification failed at backend");
    }
  };

  const onSuccess = (result) => {
    console.log("World ID Verified:", result);
    // Berjaya! Tukar state untuk buka portal
    setIsVerified(true);
    alert("✅ Verification Successful! Welcome to the 1414 Portal.");
  };

  // ---- GAYA CSS (Dalam JS) ----
  const styles = {
    container: {
      backgroundColor: '#000000', // Latar Belakang HITAM
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff', // Tulisan biasa putih
      fontFamily: "'Inter', sans-serif",
      padding: '20px',
      textAlign: 'center',
    },
    tokenImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%', // Jadi bulat
      border: '4px solid #ff0000', // Bingkai MERAH
      objectFit: 'cover',
      marginBottom: '25px',
      boxShadow: '0 0 30px rgba(255, 0, 0, 0.5)' // Kesan cahaya merah
    },
    title: {
      fontSize: '28px',
      fontWeight: '800',
      color: '#ff0000', // Tajuk MERAH
      margin: '0 0 10px 0',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    balanceContainer: {
      margin: '30px 0',
      padding: '20px',
      border: '2px solid #ff0000',
      borderRadius: '15px',
      backgroundColor: '#1a0000', // Merah gelap sikit
      width: '100%',
      maxWidth: '350px',
    },
    balanceLabel: {
      fontSize: '14px',
      color: '#aaaaaa',
      marginBottom: '5px',
    },
    balanceAmount: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#ff0000', // Jumlah baki MERAH besar
    },
    requirementText: {
      fontSize: '14px',
      color: '#ff0000',
      marginTop: '10px',
    },
    verifyButton: {
      padding: '18px 35px',
      background: 'linear-gradient(45deg, #ff0000, #cc0000)', // Gradien Merah
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 0 25px rgba(255, 0, 0, 0.6)',
      transition: 'transform 0.2s',
      width: '100%',
      maxWidth: '300px',
    },
    portalContainer: {
        backgroundColor: '#000000',
        minHeight: '100vh',
        padding: '20px',
        color: 'white'
    }
  };

  // --- PAPARAN UTAMA ---

  // Jika SUDAH verify, tunjuk portal dalam (Utility & Governance)
  if (isVerified) {
    return (
      <div style={styles.portalContainer}>
        <h1 style={{color: 'red', textAlign: 'center'}}>1414 Member Portal</h1>
        <KodUtility />
        <Governance />
      </div>
    );
  }

  // Jika BELUM verify, tunjuk skrin depan (Gambar Kucing & Baki)
  return (
    <div style={styles.container}>
      
      {/* 1. Gambar Token Kucing */}
      {/* PENTING: Gantikan URL di bawah dengan URL gambar anda sendiri */}
      <img 
        src="https://via.placeholder.com/300/000000/ff0000?text=1414+Token" 
        alt="1414 Token" 
        style={styles.tokenImage} 
      />

      {/* 2. Tajuk Utama */}
      <h1 style={styles.title}>1414 Access Portal</h1>
      <p style={{color: '#888'}}>Exclusive entry for token holders.</p>

      {/* 3. Paparan Baki Token */}
      <div style={styles.balanceContainer}>
        <div style={styles.balanceLabel}>Your Current Holding:</div>
        {/* Ini baki demo. Nanti kita sambung ke wallet sebenar */}
        <div style={styles.balanceAmount}>{userTokenBalance.toFixed(1)} 🇲🇾</div>
        <div style={styles.balanceLabel}>Ticker: 1414</div>
        
        <div style={styles.requirementText}>
            Requirement: Must hold ≥ {minRequired} Token to enter.
        </div>
      </div>


      {/* 4. Butang World ID (Hanya muncul jika cukup token) */}
      {hasEnoughTokens ? (
        <div style={{ margin: '20px 0', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <IDKitWidget
            app_id="app_7147fcca529b9e4c5181157a356d9378" // ID Anda
            action="portal-akses-1414"
            verification_level={VerificationLevel.Orb}
            handleVerify={handleVerify}
            onSuccess={onSuccess}
          >
            {({ open }) => (
              <button onClick={open} style={styles.verifyButton}>
                Verify with World ID
              </button>
            )}
          </IDKitWidget>
        </div>
      ) : (
        // Jika token tak cukup, tunjuk amaran ini
        <div style={{ padding: '20px', backgroundColor: '#330000', borderRadius: '10px', border: '1px solid red' }}>
            ❌ Insufficient balance. Please acquire 1414 tokens to proceed.
        </div>
      )}
      
    </div>
  );
}

export default App;
