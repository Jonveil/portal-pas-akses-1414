import React, { useState, useEffect } from 'react';
import LinksPage from "./KodUtility"; 
import IdeasPage from "./Governance";
import tokenImage from './alduin.jpg'; 

function App() {
  const [activeTab, setActiveTab] = useState('home'); 
  const [isVerified, setIsVerified] = useState(false);

  // Force Full Black Screen
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000";
    document.body.style.backgroundColor = "#000000";
    document.body.style.margin = "0";
    document.body.style.height = "100%";
    document.getElementById('root').style.height = "100%";
  }, []);

  const handleEnterPortal = () => {
    setIsVerified(true);
    setActiveTab('home'); 
  };

  const styles = {
    mainContainer: { backgroundColor: '#000000', minHeight: '100vh', width: '100%', color: '#ffffff', fontFamily: "'Inter', sans-serif", paddingBottom: '80px', userSelect: 'none', WebkitUserSelect: 'none' },
    loginWrapper: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh', padding: '20px', textAlign: 'center' },
    catImage: { width: '130px', height: '130px', borderRadius: '50%', border: '3px solid #ff0000', objectFit: 'cover', marginBottom: '20px', boxShadow: '0 0 50px rgba(255, 0, 0, 0.6)' },
    title: { fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', color: '#ff0000', letterSpacing: '4px', margin: '0', textShadow: '0 0 10px #ff0000' },
    subTitle: { color: '#888', fontSize: '12px', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' },
    mysteryBox: { border: '1px solid #333', borderRadius: '16px', padding: '30px 20px', width: '100%', maxWidth: '280px', margin: '40px 0', background: 'linear-gradient(180deg, #111 0%, #000 100%)', boxShadow: 'inset 0 0 20px rgba(255,0,0,0.1)' },
    mysteryText: { color: '#ff0000', fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', margin: 0, textShadow: '0 0 5px rgba(255, 0, 0, 0.8)' },
    enterBtn: { background: '#ff0000', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 0 20px rgba(255, 0, 0, 0.6)', letterSpacing: '2px', marginTop: '10px', textTransform: 'uppercase' },
    bottomNav: { position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#0a0a0a', borderTop: '1px solid #333', display: 'flex', justifyContent: 'space-around', padding: '12px 0', zIndex: 1000, paddingBottom: '20px' },
    navItem: { color: '#555', fontSize: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', width: '60px' },
    activeNav: { color: '#ff0000', fontWeight: 'bold' },
    pageContent: { padding: '20px', paddingTop: '40px', maxWidth: '600px', margin: '0 auto' }
  };

  const renderContent = () => {
    if (!isVerified) {
      return (
        <div style={styles.loginWrapper}>
          <img src={tokenImage} alt="1414" style={styles.catImage} onError={(e)=>{e.target.style.display='none'}} />
          
          <h1 style={styles.title}>PORTAL 1414</h1>
          <p style={styles.subTitle}>The Gate Opens</p>

          <div style={styles.mysteryBox}>
             <p style={{color:'#555', fontSize:'10px', marginBottom:'5px', textTransform:'uppercase'}}>Status</p>
             <div style={styles.mysteryText}>POWER UNLOCKS</div>
          </div>

          <button onClick={handleEnterPortal} style={styles.enterBtn}>ENTER PORTAL</button>
        </div>
      );
    }

    switch (activeTab) {
      // Kita tak payah pass userWallet lagi, KodUtility akan handle sendiri
      case 'home': return <div style={styles.pageContent}><LinksPage /></div>;
      case 'ideas': return <div style={styles.pageContent}><IdeasPage /></div>;
      case 'soon': return (
          <div style={{...styles.pageContent, textAlign:'center', paddingTop:'100px'}}>
             <h1 style={{fontSize:'40px', margin:0}}>🚧</h1>
             <h2 style={{color:'white', marginTop:'10px'}}>COMING SOON</h2>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div style={styles.mainContainer}>
      {renderContent()}
      {isVerified && (
        <div style={styles.bottomNav}>
          <div style={activeTab === 'home' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('home')}><span style={{fontSize:'20px', marginBottom:'3px'}}>🏠</span> HOME</div>
          <div style={activeTab === 'ideas' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('ideas')}><span style={{fontSize:'20px', marginBottom:'3px'}}>🖼️</span> NFTs</div>
          <div style={activeTab === 'soon' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('soon')}><span style={{fontSize:'20px', marginBottom:'3px'}}>🚀</span> SOON</div>
        </div>
      )}
    </div>
  );
}

export default App;
