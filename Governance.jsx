import React from "react";
import { 
  MediaRenderer, 
  Web3Button, 
  useContract, 
  useContractMetadata, 
  useTotalCirculatingSupply 
} from "@thirdweb-dev/react";

// ✅ INI ALAMAT CONTRACT BARU TUAN (World Chain)
const CONTRACT_ADDRESS = "0xa72DABf4F0f4Ce102D17B006e4CCB34EC74351D4";

const Governance = () => {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: contractMetadata, isLoading: isMetadataLoading } = useContractMetadata(contract);
  const { data: totalCirculatingSupply } = useTotalCirculatingSupply(contract);

  // Style mudah & kemas
  const styles = {
    container: { textAlign: "center", color: "white", padding: "20px", fontFamily: "sans-serif" },
    card: { 
      background: "linear-gradient(180deg, #1a1a1a 0%, #000 100%)", 
      borderRadius: "20px", 
      padding: "30px", 
      maxWidth: "400px", 
      margin: "0 auto",
      border: "1px solid #333",
      boxShadow: "0 0 20px rgba(0, 255, 0, 0.2)" // Glow hijau sikit
    },
    imageWrapper: { 
      borderRadius: "15px", 
      overflow: "hidden", 
      marginBottom: "20px",
      border: "2px solid #444",
      height: "300px",
      width: "100%",
    },
    title: { fontSize: "22px", fontWeight: "bold", margin: "10px 0", color: "#fff" },
    desc: { fontSize: "14px", color: "#aaa", marginBottom: "20px" },
    statsRow: { display: "flex", justifyContent: "space-between", marginBottom: "25px", padding: "0 20px" },
    statBox: { textAlign: "center" },
    statValue: { fontSize: "18px", fontWeight: "bold", color: "#fff" },
    statLabel: { fontSize: "10px", color: "#666", textTransform: "uppercase" }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {/* GAMBAR NFT */}
        <div style={styles.imageWrapper}>
          {!isMetadataLoading && contractMetadata?.image ? (
             <MediaRenderer src={contractMetadata.image} style={{width:"100%", height:"100%", objectFit:"cover"}} />
          ) : (
             <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100%", color:"#666"}}>Loading Image...</div>
          )}
        </div>

        {/* TAJUK & INFO */}
        <h2 style={styles.title}>{contractMetadata?.name || "PORTAL 1414 AGENT"}</h2>
        <p style={styles.desc}>Exclusive Genesis Pass for early adopters.</p>

        {/* STATISTIK */}
        <div style={styles.statsRow}>
           <div style={styles.statBox}>
              <div style={styles.statValue}>
                {totalCirculatingSupply ? totalCirculatingSupply.toString() : "0"} / 14
              </div>
              <div style={styles.statLabel}>Claimed</div>
           </div>
           <div style={styles.statBox}>
              <div style={{...styles.statValue, color: "#00ff00"}}>FREE</div>
              <div style={styles.statLabel}>Price</div>
           </div>
        </div>

        {/* BUTANG CLAIM (ACTION) */}
        <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          action={(contract) => contract.erc721.claim(1)}
          onSuccess={() => alert("✅ TAHNIAH! Anda kini Agent rasmi.")}
          onError={(error) => alert("❌ Gagal: " + error.message)}
          theme="dark"
          style={{ width: "100%", fontWeight: "bold", padding: "15px" }}
        >
          CLAIM AGENT PASS
        </Web3Button>

        <p style={{marginTop:"15px", fontSize:"10px", color:"#444"}}>
           Gas fee ditanggung oleh World Chain (jika guna World App)
        </p>

      </div>
    </div>
  );
};

export default Governance;
