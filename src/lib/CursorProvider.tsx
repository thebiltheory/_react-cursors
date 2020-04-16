import React, { useState } from 'react'
import CurrentCursor from './CurrentCursor'
import { CursorProviderWrapper } from './CursorContext'

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
    <CursorProviderWrapper value={contextValue}>
      <CurrentCursor nextCursor={currentCursor} />
      {children}
    </CursorProviderWrapper>
  )
}

export default CursorProvider
