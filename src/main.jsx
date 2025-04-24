import { ProductosProvider } from "./Api/ProductosContext"; 
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'


createRoot(document.getElementById('root')).render(
  <ProductosProvider>
    <App />
  </ProductosProvider>
)


