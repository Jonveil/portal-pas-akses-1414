import React, { useState, useEffect } from 'react';
import { ethers } from "ethers"; // Kita panggil library blockchain
import LinksPage from "./KodUtility"; 
import IdeasPage from "./Governance";
import tokenImage from './alduin.jpg'; 

// 🔥 INI ALAMAT KONTRAK TUAN (JANGAN UBAH) 🔥
const TOKEN_ADDRESS = "0x5Af2204515d8A092Af4482607Cc0c6A17aafF4ba";

// Ini "Kunci" untuk baca baki token (ABI Standard)
const TOKEN_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

// Info World Chain (Untuk auto-tukar network)
const WORLD_CHAIN_ID = 480; // ID World Chain
const WORLD_CHAIN_HEX = "0x1e0"; // 480 dalam bahasa robot (Hex)

function App() {
  const [activeTab, setActiveTab] = useState('home'); 
  const [isVerified, setIsVerified] = useState(false);
  
  // State untuk Wallet
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("0.0");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const minRequired = 1.0;
  const hasEnoughTokens = parseFloat(balance) >= minRequired;

  // Setup Skrin Hitam
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000";
    document.body.style.backgroundColor = "#000000";
    document.body.style.margin = "0";
    document.body.style.height = "100%";
    document.getElementById('root').style.height = "100%";
  }, []);

  // --- FUNGSI SAMBUNG WALLET (REAL) ---
  const connectWallet = async () => {
    setErrorMsg("");
    setLoading(true);

    // 1. Check ada wallet tak? (Metamask / World App Browser)
    if (!window.ethereum) {
      setLoading(false);
      return alert("Sila buka dalam Metamask Browser atau World App!");
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      
      // 2. Minta izin akses wallet
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);

      // 3. Pastikan user guna WORLD CHAIN
      const { chainId } = await provider.getNetwork();
      if (chainId !== WORLD_CHAIN_ID) {
        try {
          // Cuba tukar network automatik
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: WORLD_CHAIN_HEX }],
          });
        } catch (switchError) {
          // Kalau World Chain tiada dalam list, kita tambah
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
            throw new Error("Sila tukar network ke World Chain!");
          }
        }
        // Lepas tukar, reload page supaya refresh
        window.location.reload(); 
        return;
      }

      // 4. BACA BAKI TOKEN SEBENAR DARI BLOCKCHAIN
      const tokenContract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
      const rawBalance = await tokenContract.balanceOf(address);
      // Format dari Wei ke nombor biasa (18 decimals)
      const formattedBalance = ethers.utils.formatUnits(rawBalance, 18);
      
      setBalance(formattedBalance);
      setLoading(false);

    } catch (err) {
      console.error(err);
      setErrorMsg("Gagal sambung: " + (err.message || "Unknown Error"));
      setLoading(false);
    }
  };

  const handleEnterPortal = () => {
    if (hasEnoughTokens) {
      setIsVerified(true);
      setActiveTab('home'); 
    } else {
       alert("❌ Harap Maaf. Anda perlukan sekurang-kurangnya 1 Token 1414.");
    }
  };

  // --- STYLES ---
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

  // --- RENDER ---
  const renderContent = () => {
    if (!isVerified) {
      return (
        <div style={styles.loginWrapper}>
          <img src={tokenImage} alt="1414" style={styles.catImage} onError={(e)=>{e.target.style.display='none'}} />
          <h1 style={styles.title}>Portal 1414</h1>
          <p style={{color:'#888', fontSize:'13px'}}>Exclusive Token Gated Access</p>

          {/* KOTAK STATUS WALLET */}
          <div style={{background: '#111', border: '1px solid #333', borderRadius: '20px', padding: '25px', width: '100%', maxWidth: '320px', margin: '30px 0'}}>
            
            {!walletAddress ? (
               <p style={{color:'#888', fontSize:'14px'}}>Sila sambung wallet untuk semak kelayakan.</p>
            ) : (
               <>
                <div style={{color: '#666', fontSize: '11px', textTransform: 'uppercase'}}>YOUR BALANCE</div>
                <div style={{fontSize: '32px', fontWeight: '800', margin: '5px 0', color: 'white'}}>
                  {parseFloat(balance).toFixed(2)}
                </div>
                <div style={{color: '#ff0000', fontSize: '14px', fontWeight: 'bold'}}>1414 TOKEN</div>
                
                <div style={{marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #222', fontSize:'12px'}}>
                  Wallet: {walletAddress.slice(0,6)}...{walletAddress.slice(-4)}
                </div>
               </>
            )}

            <div style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #222'}}>
               {walletAddress ? (
                  hasEnoughTokens ? 
                   <span style={{color: '#00ff00', fontSize:'12px', fontWeight:'bold'}}>✅ ELIGIBLE (≥{minRequired})</span> : 
                   <span style={{color: 'red', fontSize:'12px'}}>❌ INELIGIBLE (Need ≥{minRequired})</span>
               ) : (
                  <span style={{color: '#555', fontSize:'12px'}}>🔴 Not Connected</span>
               )}
            </div>
          </div>

          {/* BUTANG BERTUKAR FUNGSI */}
          {!walletAddress ? (
             <button onClick={connectWallet} disabled={loading} style={{background: '#333', color: 'white', border: '1px solid #555', padding: '18px 0', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', width: '100%', maxWidth: '300px'}}>
               {loading ? "Connecting..." : "🔌 CONNECT WALLET"}
             </button>
          ) : hasEnoughTokens ? (
            <button onClick={handleEnterPortal} style={{background: '#ff0000', color: 'white', border: 'none', padding: '18px 0', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', width: '100%', maxWidth: '300px', boxShadow: '0 0 25px rgba(255, 0, 0, 0.4)'}}>
              ENTER PORTAL
            </button>
          ) : (
            <div style={{color:'red', border:'1px solid red', padding:'10px', borderRadius:'10px'}}>
              ❌ Beli token 1414 di PUF untuk masuk!
            </div>
          )}
          
          {errorMsg && <p style={{color:'red', fontSize:'12px', marginTop:'10px'}}>{errorMsg}</p>}

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
             <p style={{color:'#666'}}>More features under construction.</p>
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
             <span style={{fontSize:'22px', marginBottom:'5px'}}>🏠</span> HOME
          </div>
          <div style={activeTab === 'ideas' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('ideas')}>
             <span style={{fontSize:'22px', marginBottom:'5px'}}>💡</span> IDEAS
          </div>
          <div style={activeTab === 'soon' ? {...styles.navItem, ...styles.activeNav} : styles.navItem} onClick={() => setActiveTab('soon')}>
             <span style={{fontSize:'22px', marginBottom:'5px'}}>🚀</span> SOON
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
