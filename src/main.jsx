import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/sass/main.scss'
import AppContextProvider from '@context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('Tizhoo_Ui')).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>

  </React.StrictMode>,
)
