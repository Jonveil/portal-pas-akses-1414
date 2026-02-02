import { ConnectWallet } from "@thirdweb-dev/react";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <main className="main">
        <div className="content">
          <h1 className="title">
            Portal <span className="gradient-text">1414</span>
          </h1>

          <p className="description">
            Sistem Akses Pas Digital & Komuniti
          </p>

          <div className="connect-btn">
            <ConnectWallet 
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
              theme="dark"
            />
          </div>
          
          <div className="grid">
            <div className="card">
              <h3>Status Pas &rarr;</h3>
              <p>Semak kelayakan akses anda di sini.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
