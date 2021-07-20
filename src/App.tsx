import logo from './logo.svg'
import './App.css'
import { useConfigContext } from './ConfigContext'

function App() {
  const config = useConfigContext()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>apiURL: {config?.API_URL}</p>
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
