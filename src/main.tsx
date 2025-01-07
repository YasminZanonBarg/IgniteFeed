import React from 'react'
import ReactDOM from 'react-dom/client' /* Document Object Model -> Representação do html com javascript */
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <h1>Rocketseat</h1> */}
  </React.StrictMode>,
)