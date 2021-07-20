import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ConfigContextProvider } from './ConfigContext'

ReactDOM.render(
  <React.StrictMode>
    <ConfigContextProvider>
      <App />
    </ConfigContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
