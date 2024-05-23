import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import sound from './assets/music/summer-walk.wav';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}

      <App />
      <Footer />
      {/* <audio src={sound} autoPlay loop /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
