import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { KmusicApp } from './KmusicApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <KmusicApp/>
    </BrowserRouter>
  </StrictMode>,
)
