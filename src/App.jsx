import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Welcome to PORTAL 1414</h1>
        <p>Digital Access Pass System & Special Community</p>
      </header>

      <main>
        {/* Butang Wallet Connect DIBUANG seperti diminta */}
        
        <div className="menu-grid">
          <div className="card" onClick={() => alert("Check Pass Feature Coming Soon!")}>
            <h2>🦊 Check Pass <span>&rarr;</span></h2>
            <p>View your Kitsune membership status.</p>
          </div>

          <div className="card" onClick={() => alert("Voting Feature Coming Soon!")}>
            <h2>🗳️ Vote (DAO) <span>&rarr;</span></h2>
            <p>Join community decisions.</p>
          </div>
        </div>
      </main>
      
      <footer>
        <p>&copy; 2026 Portal 1414. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
