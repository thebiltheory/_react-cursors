import React, { useState } from 'react'
import CurrentCursor from './CurrentCursor'
import { CursorProviderWrapper } from './CursorContext'
import createGlobalStyle from '../utils/createGlobalStyle'

const GlobalStyle = createGlobalStyle`
  html{
    cursor: none;
  }
`

const CursorProvider: React.FC<any> = ({ config, children }) => {
  const [currentCursor, setCurrentCursor] = useState('default-cursor')
  const [isHovering, setIsHovering] = useState(null)

  const contextValue = {
    ...config,
    cursors: [
      { id: 'default-cursor', component: () => <div>☄️</div> },
      ...config.cursors,
    ],
    isHovering,
    setCurrentCursor,
    setIsHovering,
  }

  return (
    <CursorProviderWrapper value={contextValue}>
      <GlobalStyle />
      <CurrentCursor nextCursor={currentCursor} />
      {children}
    </CursorProviderWrapper>
  )
}

export default CursorProvider
