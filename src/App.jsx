import { ConnectWallet } from "@thirdweb-dev/react";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Selamat Datang ke <span className="gradient-text">Portal 1414</span>
        </h1>

        <p className="description">
          Sistem Akses Pas Digital & Komuniti Khas
        </p>

        <div className="connect">
          <ConnectWallet 
            dropdownPosition={{
              side: "bottom",
              align: "center",
            }}
          />
        </div>
        
        <div className="grid">
          <a href="#" className="card">
            <h2>Semak Pas &rarr;</h2>
            <p>Lihat status keahlian dan akses anda.</p>
          </a>

          <a href="#" className="card">
            <h2>Undian &rarr;</h2>
            <p>Sertai keputusan komuniti (Governance).</p>
          </a>
        </div>
      </main>
    </div>
  );
}
