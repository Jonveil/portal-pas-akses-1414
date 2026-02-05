import React, { useState } from 'react';
import { ConnectButton, useActiveAccount } from 'thirdweb/react';
import { createThirdwebClient, getContract } from 'thirdweb';
import { claimTo } from 'thirdweb/extensions/erc721';

const client = createThirdwebClient({
  clientId: "b25286cc43a81f0ecab40b732a0d462c",
});

const CONTRACT_ADDRESS = "0x5107AA60424C1C7f3Bb1DF8BEcbA9FCCaF21C091";

function App() {
  const [entered, setEntered] = useState(false);
  const [claiming, setClaiming] = useState(false);
  const account = useActiveAccount();

  const contract = getContract({
    client,
    chain: "worldchain",           // World Chain
    address: CONTRACT_ADDRESS,
  });

  const handleClaim = async () => {
    if (!account) {
      alert("Sila connect wallet dulu!");
      return;
    }

    setClaiming(true);
    try {
      const tx = await claimTo({
        contract,
        to: account.address,
        quantity: 1n,
      });
      alert("✅ Claim berjaya! Anda kini Agent 1414 rasmi.\nTx: " + tx.transactionHash);
    } catch (err) {
      console.error(err);
      alert("❌ Claim gagal: " + (err.message || "Cuba lagi nanti"));
    }
    setClaiming(false);
  };

  const styles = { /* styles kau yang lama, saya tak ubah supaya UI sama */ 
    // ... (copy semua styles dari kod lama kau, letak sini)
    container: { backgroundColor: 'black', color: 'white', minHeight: '100vh', ... }, // copy semua styles kau
    // (saya pendekkan sini, tapi kau copy-paste semua styles dari kod lama kau)
  };

  // HALAMAN DALAM (yang ada CLAIM button)
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

            {/* UTILITY TEXT */}
            <p style={{color:'#888', fontSize:'0.75rem', margin:'15px 0'}}>
              NFT ini bagi access eksklusif ke komuniti 1414, update, event & future drops.
            </p>

            {!account ? (
              <ConnectButton client={client} />
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

          <button onClick={() => setEntered(false)} style={{...}}>
            LOGOUT
          </button>
        </div>
      </div>
    );
  }

  // HALAMAN LUAR (sama macam lama)
  return (
    <div style={styles.container}>
      {/* ... kod halaman luar kau yang lama, tak ubah */}
      {/* copy dari kod lama kau */}
    </div>
  );
}

export default App;
