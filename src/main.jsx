import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { KmusicApp } from './KmusicApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthContextProvider>
        <BrowserRouter>
          <KmusicApp/>
        </BrowserRouter>
     </AuthContextProvider>
  </StrictMode>,
)
