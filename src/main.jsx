import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./assets/css/all.css"
import "./assets/css/bootstrap.css"
import "./assets/css/jquery.fancybox.css"
import "./assets/css/responsive.css"
import "./assets/css/style.css"
import "./assets/css/swiper-bundle.min.css"
import "./assets/css/swiper.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
