import React, { useState, useEffect } from 'react';
// Kita guna semula fail lama tapi isi dalam dah baru
import LinksPage from "./KodUtility"; 
import IdeasPage from "./Governance";
import tokenImage from './alduin.jpg'; 

function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' (kiri), 'ideas' (tengah), 'soon' (kanan)
  const [isVerified, setIsVerified] = useState(false);
  
  const userTokenBalance = 10.0; 
  const minRequired = 1.0;
  const hasEnoughTokens = userTokenBalance >= minRequired;

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000";
    document.body.style.backgroundColor = "#000000";
    document.body.style.margin = "0";
    document.body.style.height = "100%";
    document.getElementById('root').style.height = "100%";
  }, []);

  const handleEnterPortal = () => {
    if (hasEnoughTokens) {
      setIsVerified(true);
      // Bila masuk, terus pergi ke tab 'home' (Links)
      setActiveTab('home'); 
    } else {
       alert("Insufficient Balance.");
    }
  };

  const styles = {
    mainContainer: {
      backgroundColor: '#000000',
      minHeight: '100vh', 
      width: '100%',
      color: '#ffffff',
      fontFamily: "'Inter', sans-serif",
      paddingBottom: '80px', 
      userSelect: 'none',
      WebkitUserSelect: 'none',
    },
    // Login Screen Style
    loginWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '90vh',
      padding: '20px',
      textAlign: 'center',
    },
    catImage: {
      width: '140px',
      height: '140px',
      borderRadius: '50%',
      border: '4px solid #ff0000',
      objectFit: 'cover',
      marginBottom: '20px',
      boxShadow: '0 0 40px rgba(255, 0, 0, 0.6)'
    },
    title: {
      fontSize: '28px',
      fontWeight: '900',
      textTransform: 'uppercase',
      color: '#ff0000',
      letterSpacing: '2px',
      margin: '0',
    },
    // Bottom Nav Style
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid #333',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '15px 0',
      zIndex: 1000,
      paddingBottom: '20px' // Jarak sikit untuk iPhone baru
    },
    navItem: {
      color: '#555',
      fontSize: '10px', // Tulisan kecil sikit
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      width: '60px'
    },
    activeNav: {
      color: '#ff0000',
      fontWeight: 'bold',
    },
    pageContent: {
      padding: '20px',
      paddingTop: '40px',
      maxWidth: '600px',
      margin: '0 auto' // Centerkan kalau skrin besar
    }
  };

  // --- LOGIC TUKAR HALAMAN ---
  const renderContent = () => {
    // Kalau belum login, tunjuk pintu pagar (Login Screen)
    if (!isVerified) {
      return (
        <div style={styles.loginWrapper}>
          <img src={tokenImage} alt="1414" style={styles.catImage} onError={(e)=>{e.target.style.display='none'}} />
          <h1 style={styles.title}>Portal 1414</h1>
          <p style={{color:'#888', fontSize:'13px'}}>Exclusive Token Gated Access</p>

          <div style={{background: '#111', border: '1px solid #333', borderRadius: '20px', padding: '25px', width: '100%', maxWidth: '320px', margin: '30px 0'}}>
            <div style={{color: '#666', fontSize: '11px', textTransform: 'uppercase'}}>HOLDINGS</div>
            <div style={{fontSize: '42px', fontWeight: '800', margin: '5px 0', color: 'white'}}>{userTokenBalance.toFixed(1)}</div>
            <div style={{color: '#ff0000', fontSize: '14px', fontWeight: 'bold'}}>1414 TOKEN</div>
            
            <div style={{marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #222'}}>
               {hasEnoughTokens ? 
                 <span style={{color: '#00ff00', fontSize:'12px', fontWeight:'bold'}}>✅ ELIGIBLE (≥{minRequired})</span> : 
                 <span style={{color: 'red'}}>❌ INELIGIBLE</span>
               }
            </div>
          </div>

          {hasEnoughTokens ? (
            <button onClick={handleEnterPortal} style={{background: '#ff0000', color: 'white', border: 'none', padding: '18px 0', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', width: '100%', maxWidth: '300px', boxShadow: '0 0 25px rgba(255, 0, 0, 0.4)'}}>
              ENTER PORTAL
            </button>
          ) : (
            <div style={{color:'#555'}}>Purchase tokens to enter.</div>
          )}
        </div>
      );
    }

    // Kalau DAH login, tunjuk content berdasarkan Tab
    switch (activeTab) {
      case 'home':
        return <div style={styles.pageContent}><LinksPage /></div>; // Ini KodUtility
      case 'ideas':
        return <div style={styles.pageContent}><IdeasPage /></div>; // Ini Governance
      case 'soon':
        return (
          <div style={{...styles.pageContent, textAlign:'center', paddingTop:'100px'}}>
             <h1 style={{fontSize:'50px', margin:0}}>🚧</h1>
             <h2 style={{color:'white'}}>COMING SOON</h2>
             <p style={{color:'#666'}}>More features are being built.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.mainContainer}>
      {renderContent()}

      {/* MENU BAWAH - Hanya muncul lepas login */}
      {isVerified && (
        <div style={styles.bottomNav}>
          {/* TAB 1: HOME (Links) */}
          <div style={activeTab === 'home' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('home')}>
             <span style={{fontSize:'22px', marginBottom:'5px'}}>🏠</span> 
             HOME
          </div>
          
          {/* TAB 2: IDEAS (Tengah) */}
          <div style={activeTab === 'ideas' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('ideas')}>
             <span style={{fontSize:'22px', marginBottom:'5px'}}>💡</span> 
             IDEAS
          </div>

          {/* TAB 3: SOON (Kanan) */}
          <div style={activeTab === 'soon' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('soon')}>
             <span style={{fontSize:'22px', marginBottom:'5px'}}>🚀</span> 
             SOON
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
