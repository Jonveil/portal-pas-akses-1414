import React from "react";
import { 
  MediaRenderer, 
  Web3Button, 
  useContract, 
  useContractMetadata, 
  useTotalCirculatingSupply,
  useClaimedNFTSupply
} from "@thirdweb-dev/react";

// ✅ CONTRACT BARU TUAN
const CONTRACT_ADDRESS = "0xa72DABf4F0f4Ce102D17B006e4CCB34EC74351D4";

const Governance = () => {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: contractMetadata } = useContractMetadata(contract);
  const { data: claimedSupply } = useClaimedNFTSupply(contract);
  
  // Kiraan sebenar (Bukan 891 lagi!)
  const totalAvailable = 14; 
  const claimed = claimedSupply ? parseInt(claimedSupply.toString()) : 0;
  // Pastikan bar tak lebih 100%
  const percentage = Math.min((claimed / totalAvailable) * 100, 100);

  const styles = {
    container: { textAlign: "center", color: "white", padding: "20px", fontFamily: "sans-serif", background: "black", minHeight: "100vh" },
    card: { background: "#111", borderRadius: "20px", padding: "20px", maxWidth: "380px", margin: "0 auto", border: "1px solid #333" },
    imageWrapper: { borderRadius: "15px", overflow: "hidden", marginBottom: "20px", border: "2px solid #ff0000", height: "300px", width: "100%" },
    title: { fontSize: "24px", fontWeight: "900", margin: "10px 0", color: "#fff", textTransform: "uppercase" },
    
    // Bar Progress
    progressContainer: { background: "#333", borderRadius: "10px", height: "10px", width: "100%", margin: "10px 0", overflow: "hidden" },
    progressBar: { background: "#00ff00", height: "100%", width: `${percentage}%`, transition: "width 0.5s" },
    
    // Kotak Fasa
    phaseBox: { border: "1px solid #333", borderRadius: "10px", padding: "10px", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" },
    phaseActive: { border: "1px solid #00ff00", background: "rgba(0, 255, 0, 0.1)" },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {/* GAMBAR */}
        <div style={styles.imageWrapper}>
          {contractMetadata?.image ? (
             <MediaRenderer src={contractMetadata.image} style={{width:"100%", height:"100%", objectFit:"cover"}} />
          ) : (
             <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100%", color:"#666"}}>Loading...</div>
          )}
        </div>

        <h2 style={styles.title}>{contractMetadata?.name || "PORTAL 1414 AGENT"}</h2>

        {/* PROGRESS BAR (DATA SEBENAR) */}
        <div style={{display:"flex", justifyContent:"space-between", fontSize:"12px", color:"#aaa"}}>
           <span>Minted</span>
           <span style={{color:"#00ff00"}}>{claimed} / {totalAvailable}</span>
        </div>
        <div style={styles.progressContainer}>
           <div style={styles.progressBar}></div>
        </div>

        <br/>

        {/* FASA 1 (FREE) */}
        <div style={{...styles.phaseBox, ...styles.phaseActive}}>
           <div style={{textAlign:"left"}}>
              <div style={{fontWeight:"bold", fontSize:"14px"}}>PHASE 1 (LIVE)</div>
              <div style={{fontSize:"10px", color:"#aaa"}}>Early Bird</div>
           </div>
           <div style={{fontWeight:"bold", color: "#00ff00", fontSize:"16px"}}>
              FREE
           </div>
        </div>

        {/* FASA 2 (10k Token) */}
        <div style={{...styles.phaseBox, opacity: 0.5}}>
           <div style={{textAlign:"left"}}>
              <div style={{fontWeight:"bold", fontSize:"14px"}}>PHASE 2</div>
              <div style={{fontSize:"10px", color:"#aaa"}}>Public Sale</div>
           </div>
           <div style={{fontWeight:"bold", fontSize:"14px"}}>
              10k $1414
           </div>
        </div>

        <br/>

        <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          action={(contract) => contract.erc721.claim(1)}
          onSuccess={() => alert("✅ TAHNIAH! Anda kini Agent rasmi.")}
          onError={(error) => alert("❌ Gagal: " + error.message)}
          theme="dark"
          style={{ width: "100%", fontWeight: "bold", background: "#00ff00", color: "black" }}
        >
          CLAIM NOW (FREE)
        </Web3Button>

      </div>
    </div>
  );
};

export default Governance;
