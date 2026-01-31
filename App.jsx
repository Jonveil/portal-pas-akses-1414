import React, { useState, useEffect } from 'react';
import { ethers } from "ethers"; 
import LinksPage from "./KodUtility"; 
import IdeasPage from "./Governance";
import tokenImage from './alduin.jpg'; 

// 🔥 ALAMAT KONTRAK TUAN (KEKALKAN)
const TOKEN_ADDRESS = "0x5Af2204515d8A092Af4482607Cc0c6A17aafF4ba";

const TOKEN_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

const WORLD_CHAIN_ID = 480; 
const WORLD_CHAIN_HEX = "0x1e0"; 

function App() {
  const [activeTab, setActiveTab] = useState('home'); 
  const [isVerified, setIsVerified] = useState(false);
  
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("0.0");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // Utk papar error cantik

  const minRequired = 1.0;
  const hasEnoughTokens = parseFloat(balance) >= minRequired;

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000";
    document.body.style.backgroundColor = "#000000";
    document.body.style.margin = "0";
    document.body.style.height = "100%";
    document.getElementById('root').style.height = "100%";
  }, []);

  const connectWallet = async () => {
    setErrorMsg("");
    setLoading(true);

    // 1. Check Browser Wallet
    if (!window.ethereum) {
      setLoading(false);
      // 🔥 GANTI ALERT DENGAN MESEJ ENGLISH 🔥
      setErrorMsg("⚠️ Wallet not found. Please open this link inside Metamask Browser, OKX, or World App.");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);

      // 3. Network Check (World Chain)
      const { chainId } = await provider.getNetwork();
      if (chainId !== WORLD_CHAIN_ID) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: WORLD_CHAIN_HEX }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
             await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: WORLD_CHAIN_HEX,
                chainName: 'World Chain',
                nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
                rpcUrls: ['https://worldchain-mainnet.g.alchemy.com/public'],
                blockExplorerUrls: ['https://worldscan.org']
              }],
            });
          } else {
            throw new Error("Please switch network to World Chain.");
          }
        }
        window.location.reload(); 
        return;
      }

      // 4. Baca Baki
      const tokenContract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
      const rawBalance = await tokenContract.balanceOf(address);
      const formattedBalance = ethers.utils.formatUnits(rawBalance, 18);
      
      setBalance(formattedBalance);
      setLoading(false);

    } catch (err) {
      console.error(err);
      setErrorMsg("Connection Failed. Please try again.");
      setLoading(false);
    }
  };

  const handleEnterPortal = () => {
    if (hasEnoughTokens) {
      setIsVerified(true);
      setActiveTab('home'); 
    } else {
       // 🔥 GUNA CUSTOM ERROR, BUKAN ALERT POPUP 🔥
       setErrorMsg("❌ Access Denied. You need at least 1 Token.");
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
      boxShadow: '0 0 30px rgba(255, 0, 0, 0.6)'
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
        borderRadius: '20px', 
        padding: '20px', 
        width: '100%', 
        maxWidth: '300px', 
        margin: '25px 0'
    },
    // 🔥 BUTANG DIKECILKAN SIKIT & ENGLISH 🔥
    actionBtn: {
        background: 'linear-gradient(90deg, #ff0000, #990000)', 
        color: 'white', 
        border: 'none', 
        padding: '12px 30px', // Padding kiri kanan dikurangkan
        borderRadius: '50px', 
        fontSize: '15px', 
        fontWeight: 'bold', 
        cursor: 'pointer', 
        width: 'auto', // Ikut saiz teks
        minWidth: '180px',
        maxWidth: '250px',
        boxShadow: '0 0 15px rgba(255, 0, 0, 0.4)'
    },
    disabledBtn: {
        background: '#222', 
        color: '#777', 
        border: '1px solid #444', 
        padding: '12px 30px', 
        borderRadius: '50px', 
        fontSize: '15px', 
        fontWeight: 'bold', 
        cursor: 'pointer',
        width: 'auto',
        minWidth: '180px'
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
      paddingBottom: '25px' 
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
    if (!isVerified) {
      return (
        <div style={styles.loginWrapper}>
          <img src={tokenImage} alt="1414" style={styles.catImage} onError={(e)=>{e.target.style.display='none'}} />
          <h1 style={styles.title}>Portal 1414</h1>
          <p style={{color:'#888', fontSize:'12px', marginTop:'5px'}}>Exclusive Token Gated Access</p>

          {/* KOTAK STATUS WALLET */}
          <div style={styles.statusBox}>
            
            {!walletAddress ? (
               <p style={{color:'#666', fontSize:'13px', margin:0}}>Connect wallet to verify holdings.</p>
            ) : (
               <>
                <div style={{color: '#666', fontSize: '10px', textTransform: 'uppercase', letterSpacing:'1px'}}>YOUR HOLDINGS</div>
                <div style={{fontSize: '32px', fontWeight: '800', margin: '5px 0', color: 'white'}}>
                  {parseFloat(balance).toFixed(1)}
                </div>
                <div style={{color: '#ff0000', fontSize: '12px', fontWeight: 'bold'}}>1414 TOKEN</div>
                
                <div style={{marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #222', fontSize:'11px', color:'#555'}}>
                  Wallet: {walletAddress.slice(0,6)}...{walletAddress.slice(-4)}
                </div>
               </>
            )}

            <div style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #222'}}>
               {walletAddress ? (
                  hasEnoughTokens ? 
                   <span style={{color: '#00ff00', fontSize:'12px', fontWeight:'bold'}}>✅ ELIGIBLE (≥{minRequired})</span> : 
                   <span style={{color: 'red', fontSize:'12px', fontWeight:'bold'}}>❌ INELIGIBLE (Need ≥{minRequired})</span>
               ) : (
                  <span style={{color: '#444', fontSize:'12px'}}>🔴 Not Connected</span>
               )}
            </div>
          </div>

          {/* BUTANG CONNECT / ENTER */}
          {!walletAddress ? (
             <button onClick={connectWallet} disabled={loading} style={styles.disabledBtn}>
               {loading ? "Connecting..." : "🔌 CONNECT WALLET"}
             </button>
          ) : hasEnoughTokens ? (
            <button onClick={handleEnterPortal} style={styles.actionBtn}>
              ENTER PORTAL
            </button>
          ) : (
            <div style={{color:'red', border:'1px solid red', padding:'10px', borderRadius:'10px', fontSize:'12px'}}>
              ❌ Buy 1414 tokens to enter!
            </div>
          )}
          
          {/* PESANAN ERROR (TULISAN MERAH, BUKAN POPUP) */}
          {errorMsg && (
            <div style={{marginTop:'20px', padding:'10px', color:'#ff4444', fontSize:'12px', maxWidth:'280px', lineHeight:'1.4', border:'1px dashed #333', borderRadius:'8px'}}>
              {errorMsg}
            </div>
          )}

        </div>
      );
    }

    switch (activeTab) {
      case 'home': return <div style={styles.pageContent}><LinksPage /></div>;
      case 'ideas': return <div style={styles.pageContent}><IdeasPage /></div>;
      case 'soon': return (
          <div style={{...styles.pageContent, textAlign:'center', paddingTop:'100px'}}>
             <h1 style={{fontSize:'50px', margin:0}}>🚧</h1>
             <h2 style={{color:'white'}}>COMING SOON</h2>
             <p style={{color:'#666', fontSize:'14px'}}>More features under construction.</p>
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
          <div style={activeTab === 'home' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('home')}>
             <span style={{fontSize:'20px', marginBottom:'4px'}}>🏠</span> HOME
          </div>
          <div style={activeTab === 'ideas' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('ideas')}>
             <span style={{fontSize:'20px', marginBottom:'4px'}}>💡</span> IDEAS
          </div>
          <div style={activeTab === 'soon' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('soon')}>
             <span style={{fontSize:'20px', marginBottom:'4px'}}>🚀</span> SOON
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
