import React, { createContext } from 'react'

export const CursorContext = createContext({})

const CursorProvider: React.FC<any> = ({ config, children }) => {
  return (
    <CursorContext.Provider value={config}>{children}</CursorContext.Provider>
  )
}

export default CursorProvider
