import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

//We import the BrowserRouter to enable routing in our application


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //We wrap our App component with BrowserRouter to provide routing context */}
    <BrowserRouter>
  
      <App />
    </BrowserRouter>

  </StrictMode>,
)
