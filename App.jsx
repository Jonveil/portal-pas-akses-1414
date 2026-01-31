import React, { useState, useEffect } from 'react';
import LinksPage from "./KodUtility"; 
import IdeasPage from "./Governance";
import tokenImage from './alduin.jpg'; 

function App() {
  const [activeTab, setActiveTab] = useState('home'); 
  const [isVerified, setIsVerified] = useState(false);
  
  // --- SIMULASI VIP (Auto Kaya) ---
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
    // Terus masuk tanpa banyak soal
    setIsVerified(true);
    setActiveTab('home'); 
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
      width: '130px',
      height: '130px',
      borderRadius: '50%',
      border: '3px solid #ff0000',
      objectFit: 'cover',
      marginBottom: '20px',
      boxShadow: '0 0 35px rgba(255, 0, 0, 0.5)'
    },
    title: {
      fontSize: '26px',
      fontWeight: '900',
      textTransform: 'uppercase',
      color: '#ff0000',
      letterSpacing: '2px',
      margin: '0',
    },
    statusBox: {
        background: '#111', 
        border: '1px solid #333', 
        borderRadius: '16px', 
        padding: '20px', 
        width: '100%', 
        maxWidth: '280px', // Kotak lebih ramping
        margin: '30px 0'
    },
    // 🔥 BUTANG LEBIH KECIL & KEMAS 🔥
    enterBtn: {
        background: 'linear-gradient(90deg, #ff0000, #b30000)', 
        color: 'white', 
        border: 'none', 
        padding: '12px 35px', 
        borderRadius: '50px', 
        fontSize: '15px', 
        fontWeight: 'bold', 
        cursor: 'pointer', 
        boxShadow: '0 0 15px rgba(255, 0, 0, 0.4)',
        letterSpacing: '1px',
        marginTop: '10px'
    },
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid #333',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '12px 0', // Nipis sikit
      zIndex: 1000,
      paddingBottom: '20px' 
    },
    navItem: {
      color: '#555',
      fontSize: '10px', 
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
      margin: '0 auto' 
    }
  };

  const renderContent = () => {
    // SKRIN DEPAN (LOGIN)
    if (!isVerified) {
      return (
        <div style={styles.loginWrapper}>
          <img src={tokenImage} alt="1414" style={styles.catImage} onError={(e)=>{e.target.style.display='none'}} />
          <h1 style={styles.title}>Portal 1414</h1>
          <p style={{color:'#888', fontSize:'12px', marginTop:'5px'}}>Exclusive Token Gated Entry</p>

          <div style={styles.statusBox}>
            <div style={{color: '#666', fontSize: '10px', textTransform: 'uppercase', letterSpacing:'1px'}}>YOUR HOLDINGS</div>
            <div style={{fontSize: '32px', fontWeight: '800', margin: '5px 0', color: 'white'}}>
               {userTokenBalance.toFixed(1)}
            </div>
            <div style={{color: '#ff0000', fontSize: '12px', fontWeight: 'bold'}}>1414 TOKEN</div>
            
            <div style={{marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #222'}}>
               <span style={{color: '#00ff00', fontSize:'11px', fontWeight:'bold'}}>
                 ✅ ELIGIBLE FOR ENTRY
               </span>
            </div>
          </div>

          <button onClick={handleEnterPortal} style={styles.enterBtn}>
            ENTER PORTAL
          </button>
        </div>
      );
    }

    // SKRIN DALAM (LEPAS LOGIN)
    switch (activeTab) {
      case 'home': return <div style={styles.pageContent}><LinksPage /></div>;
      case 'ideas': return <div style={styles.pageContent}><IdeasPage /></div>;
      case 'soon': return (
          <div style={{...styles.pageContent, textAlign:'center', paddingTop:'100px'}}>
             <h1 style={{fontSize:'40px', margin:0}}>🚧</h1>
             <h2 style={{color:'white', marginTop:'10px'}}>COMING SOON</h2>
             <p style={{color:'#666', fontSize:'13px'}}>More features underway.</p>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div style={styles.mainContainer}>
      {renderContent()}

      {/* MENU BAWAH */}
      {isVerified && (
        <div style={styles.bottomNav}>
          <div style={activeTab === 'home' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('home')}>
             <span style={{fontSize:'20px', marginBottom:'3px'}}>🏠</span> HOME
          </div>
          <div style={activeTab === 'ideas' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('ideas')}>
             <span style={{fontSize:'20px', marginBottom:'3px'}}>💡</span> IDEAS
          </div>
          <div style={activeTab === 'soon' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('soon')}>
             <span style={{fontSize:'20px', marginBottom:'3px'}}>🚀</span> SOON
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
