import React from 'react';

function App() {
  // Kita guna "Internal Style" supaya tak payah pening cari fail CSS
  const containerStyle = {
    backgroundColor: '#121212',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  };

  const cardStyle = {
    border: '1px solid #333',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#1E1E1E',
    width: '300px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#646cff' }}>PORTAL 1414</h1>
        <p>Digital Access Pass & Exclusive Community</p>
      </header>

      <main>
        <div style={cardStyle} onClick={() => alert("Check Pass Feature Coming Soon!")}>
          <h2>🦊 Check Pass <span>&rarr;</span></h2>
          <p>View your membership status.</p>
        </div>

        <div style={cardStyle} onClick={() => alert("Voting Feature Coming Soon!")}>
          <h2>🗳️ Vote (DAO) <span>&rarr;</span></h2>
          <p>Join community decisions.</p>
        </div>
      </main>
      
      <footer style={{ marginTop: '50px', color: '#888' }}>
        <p>&copy; 2026 Portal 1414.</p>
      </footer>
    </div>
  );
}

export default App;
