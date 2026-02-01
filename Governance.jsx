import React from "react";
import { 
  MediaRenderer, 
  Web3Button, 
  useContract, 
  useContractMetadata, 
  useTotalCirculatingSupply,
  useClaimedNFTSupply
} from "@thirdweb-dev/react";

// ✅ ALAMAT CONTRACT BARU TUAN (World Chain)
const CONTRACT_ADDRESS = "0xa72DABf4F0f4Ce102D17B006e4CCB34EC74351D4";

const Governance = () => {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: contractMetadata } = useContractMetadata(contract);
  const { data: claimedSupply } = useClaimedNFTSupply(contract);
  const { data: totalCirculatingSupply } = useTotalCirculatingSupply(contract);

  // Kira peratusan untuk progress bar
  const totalAvailable = 14; // Fasa 1 cuma 14
  const claimed = claimedSupply ? parseInt(claimedSupply.toString()) : 0;
  const percentage = (claimed / totalAvailable) * 100;

  // Style 'Dark Mode' macam screenshot Tuan
  const styles = {
    container: { textAlign: "center", color: "white", padding: "20px", fontFamily: "sans-serif", background: "black", minHeight: "100vh" },
    card: { 
      background: "#111", 
      borderRadius: "20px", 
      padding: "20px", 
      maxWidth: "380px", 
      margin: "0 auto",
      border: "1px solid #333",
      boxShadow: "0 0 40px rgba(0, 255, 0, 0.1)" 
    },
    imageWrapper: { 
      borderRadius: "15px", 
      overflow: "hidden", 
      marginBottom: "20px",
      border: "2px solid #ff0000", // Merah sikit
      height: "300px",
      width: "100%",
      position: "relative"
    },
    title: { fontSize: "24px", fontWeight: "900", margin: "10px 0", color: "#fff", textTransform: "uppercase" },
    subTitle: { fontSize: "12px", color: "#ff0000", letterSpacing: "2px", fontWeight: "bold", marginBottom: "20px" },
    
    // Bar Progress
    progressContainer: { background: "#333", borderRadius: "10px", height: "10px", width: "100%", margin: "10px 0", overflow: "hidden" },
    progressBar: { background: "#00ff00", height: "100%", width: `${percentage}%`, transition: "width 0.5s" },
    mintInfo: { display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#aaa", marginBottom: "20px" },

    // Kotak Fasa
    phaseBox: { border: "1px solid #333", borderRadius: "10px", padding: "10px", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" },
    phaseActive: { border: "1px solid #00ff00", background: "rgba(0, 255, 0, 0.1)" },
    phaseTitle: { fontSize: "12px", fontWeight: "bold", textAlign: "left" },
    phasePrice: { fontSize: "14px", fontWeight: "bold" },
    
    statusBadge: { fontSize: "10px", background: "#00ff00", color: "black", padding: "2px 6px", borderRadius: "4px", marginLeft: "5px" }
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

        {/* TAJUK */}
        <h2 style={styles.title}>{contractMetadata?.name || "PORTAL 1414 AGENT"}</h2>
        <div style={styles.subTitle}>GENESIS COLLECTION</div>

        {/* PROGRESS BAR */}
        <div style={styles.mintInfo}>
           <span>Minted</span>
           <span style={{color:"#00ff00"}}>{claimed} / {totalAvailable}</span>
        </div>
        <div style={styles.progressContainer}>
           <div style={styles.progressBar}></div>
        </div>

        <br/>

        {/* SENARAI FASA */}
        
        {/* FASA 1 (AKTIF SEKARANG) */}
        <div style={{...styles.phaseBox, ...styles.phaseActive}}>
           <div style={styles.phaseTitle}>
              PHASE 1 (LIVE) <span style={styles.statusBadge}>ACTIVE</span><br/>
              <span style={{color:"#aaa", fontWeight:"normal"}}>Early Adopters</span>
           </div>
           <div style={{...styles.phasePrice, color: "#00ff00"}}>
              FREE
           </div>
        </div>

        {/* FASA 2 (AKAN DATANG) */}
        <div style={{...styles.phaseBox, opacity: 0.5}}>
           <div style={styles.phaseTitle}>
              PHASE 2 <br/>
              <span style={{color:"#aaa", fontWeight:"normal"}}>Public Sale</span>
           </div>
           <div style={styles.phasePrice}>
              10k $1414
           </div>
        </div>

        <br/>

        {/* BUTANG CLAIM */}
        <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          action={(contract) => contract.erc721.claim(1)}
          onSuccess={() => alert("✅ TAHNIAH! Anda kini Agent rasmi.")}
          onError={(error) => alert("❌ Gagal: " + error.message)}
          theme="dark"
          style={{ width: "100%", fontWeight: "bold", height: "50px", background: "#00ff00", color: "black" }}
        >
          CLAIM NOW (FREE)
        </Web3Button>

      </div>
    </div>
  );
};

export default Governance;
