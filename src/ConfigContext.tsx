import { createContext, FC, useContext, useEffect, useState } from 'react'

type IConfigContext = {
  API_URL: string
} | undefined

const ConfigContext = createContext<IConfigContext>(undefined)

export const ConfigContextProvider: FC = (props) => {
  const [contextValue, setContextValue] = useState<IConfigContext>(undefined)

  useEffect(() => {
    fetch('/config.json')
      .then(response => response.json())
      .then(setContextValue)
  }, [])

  return <ConfigContext.Provider value={contextValue}>{props.children}</ConfigContext.Provider>
}

export const useConfigContext = () => useContext(ConfigContext)
