import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Gallery from './Gallery'
import Report from './Report'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/report" element={<Report />} /> {/* OVO DODATI */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

