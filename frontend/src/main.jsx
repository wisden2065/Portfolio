import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyAppContext from './assets/Context/MyAppContext.jsx'

createRoot(document.getElementById('root')).render(
  <MyAppContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyAppContext>
)
