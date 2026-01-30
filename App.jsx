import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";
import KodUtility from "./KodUtility"; 
import Governance from "./Governance"; // ✅ SAYA DAH TUKAR JADI GOVERNANCE

function App() {
  const handleVerify = async (proof) => {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(proof),
    });

    if (!res.ok) throw new Error("Verification failed");
  };

  const onSuccess = () => {
    alert("World ID berjaya disahkan!");
  };

  return (
    <div style={{ padding: 20, backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Portal Pas Akses 1414</h1>

      <div style={{ margin: '40px 0' }}>
      <IDKitWidget
        app_id="app_7147fcca529b9e4c5181157a356d9378"  // ✅ ID PENUH
        action="portal-akses-1414"
        verification_level={VerificationLevel.Orb}
        handleVerify={handleVerify}
        onSuccess={onSuccess}
      >
        {({ open }) => (
          <button onClick={open} style={{ padding: '15px 30px', background: 'red', color: 'white', border: 'none', borderRadius: '30px', fontWeight: 'bold' }}>
            Sahkan Identiti dengan World ID
          </button>
        )}
      </IDKitWidget>
      </div>

      <KodUtility />
      <Governance /> 
    </div>
  );
}

export default App;
