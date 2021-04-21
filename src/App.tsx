import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [apiURL, setApiURL] = useState('')

  // This is just easy setup
  // Probably will be better to fetch it before we call ReactDOM.render
  // and persist the config.json content
  // for example in localStorage, window object or redux store etc
  useEffect(() => {
    fetch('/config.json')
      .then(response => response.json())
      .then(data => {
        setApiURL(data.API_URL)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>apiURL: {apiURL}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
