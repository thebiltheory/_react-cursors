import React, { createContext, useState } from 'react'

import CurrentCursor from './CurrentCursor'

export const CursorContext = createContext({})

const CursorProvider: React.FC<any> = ({ config, children }) => {
  const [currentCursor, setCurrentCursor] = useState('default-cursor')
  const [contextValue] = useState({
    cursors: [
      { id: 'default-cursor', component: () => <div>☄️</div> },
      ...config.cursors,
    ],
    setCurrentCursor,
  })

  return (
    <CursorContext.Provider value={contextValue}>
      <CurrentCursor nextCursor={currentCursor} />
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider
