import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Pastikan anda ada fail index.css kalau nak style, kalau tak ada boleh padam baris import css
// import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
