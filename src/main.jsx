import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UseCard } from './components/UseCard'
//import '../src/index.css'
import "./css/QrCode.css";
import { QrCode } from './components/QrCode';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> 
    <UseCard />*/}
    <QrCode/>
  </StrictMode>
)
