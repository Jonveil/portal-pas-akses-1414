import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";
import KodUtility from "./KodUtility.jsx";
import TadbirUrus from "./TadbirUrus.jsx";

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
    <div style={{ padding: 20 }}>
      <h1>Portal Pas Akses 1414</h1>

      <IDKitWidget
        app_id="app_7147fcca529b9e4c5181157a35"
        action="portal-akses-1414"
        verification_level={VerificationLevel.Orb}
        handleVerify={handleVerify}
        onSuccess={onSuccess}
      >
        {({ open }) => (
          <button onClick={open}>
            Sahkan Identiti dengan World ID
          </button>
        )}
      </IDKitWidget>

      <KodUtility />
      <TadbirUrus />
    </div>
  );
}

export default App;
