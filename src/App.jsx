import { ConnectWallet } from "@thirdweb-dev/react";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Selamat Datang ke <br />
          <span className="gradient-text">PORTAL 1414</span>
        </h1>

        <p className="description">
          Sistem Akses Pas Digital & Komuniti Khas
        </p>

        <div className="connect-box">
          <ConnectWallet 
            theme="dark"
            btnTitle="Sambung Wallet"
          />
        </div>
        
        <div className="grid">
          <div className="card">
            <h2>🦊 Semak Pas &rarr;</h2>
            <p>Lihat status keahlian Kitsune anda.</p>
          </div>

          <div className="card">
            <h2>🗳️ Undian &rarr;</h2>
            <p>Sertai keputusan komuniti (DAO).</p>
          </div>
        </div>
      </main>
    </div>
  );
}
