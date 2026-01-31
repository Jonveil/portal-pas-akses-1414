import React, { useState, useEffect } from 'react';
import KodUtility from "./KodUtility";
import Governance from "./Governance";
import tokenImage from './alduin.jpg'; 

function App() {
  const [activeTab, setActiveTab] = useState('home'); 
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
      setActiveTab('utility'); 
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
    homeWrapper: {
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
    balanceCard: {
      background: '#111',
      border: '1px solid #333',
      borderRadius: '20px',
      padding: '25px',
      width: '100%',
      maxWidth: '320px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      marginBottom: '30px',
      marginTop: '20px'
    },
    btnEnter: {
      background: '#ff0000',
      color: 'white',
      border: 'none',
      padding: '18px 0',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '300px',
      boxShadow: '0 0 25px rgba(255, 0, 0, 0.4)',
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
      padding: '15px 0',
      zIndex: 1000,
    },
    navItem: {
      color: '#555',
      fontSize: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    activeNav: {
      color: '#ff0000',
      fontWeight: 'bold',
    },
    pageContent: {
      padding: '20px',
      paddingTop: '40px',
    }
  };

  const renderContent = () => {
    if (!isVerified && activeTab !== 'home') return null;

    switch (activeTab) {
      case 'home':
        return (
          <div style={styles.homeWrapper}>
            <img src={tokenImage} alt="1414" style={styles.catImage} onError={(e)=>{e.target.style.display='none'}} />
            <h1 style={styles.title}>Portal 1414</h1>
            <p style={{color:'#888', fontSize:'13px'}}>Exclusive Token Gated Access</p>

            <div style={styles.balanceCard}>
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
              <button onClick={handleEnterPortal} style={styles.btnEnter}>ENTER PORTAL</button>
            ) : (
              <div style={{color:'#555'}}>Purchase tokens to enter.</div>
            )}
          </div>
        );
      case 'utility':
        return <div style={styles.pageContent}><KodUtility /></div>;
      case 'vote':
        return <div style={styles.pageContent}><Governance /></div>;
      default:
        return null;
    }
  };

  return (
    <div style={styles.mainContainer}>
      {renderContent()}

      {isVerified && (
        <div style={styles.bottomNav}>
          <div style={activeTab === 'home' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('home')}>
             <span style={{fontSize:'20px'}}>🏠</span> Home
          </div>
          <div style={activeTab === 'utility' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('utility')}>
             <span style={{fontSize:'20px'}}>🔧</span> Utility
          </div>
          <div style={activeTab === 'vote' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('vote')}>
             <span style={{fontSize:'20px'}}>🗳️</span> Vote
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
