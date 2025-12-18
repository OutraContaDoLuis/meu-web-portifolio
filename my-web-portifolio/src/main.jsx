import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/classes/spacing.css'
import './styles/classes/colors.css'
import './styles/classes/sizing.css'
import './styles/classes/display.css'
import './styles/classes/fonts.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
