import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './App.tsx'
import ThemeContextProvider from './hooks/useContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)
