import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ChangePassword from './temp_components/ChangePassword.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ChangePassword />
  </React.StrictMode>,
)
