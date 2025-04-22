import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ✅ استيراد الـ Router
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter> {/* ✅ تغليف التطبيق بالراوتر */}
      <App />
    </BrowserRouter>  
    </StrictMode>,
)
