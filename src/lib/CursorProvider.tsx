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
  const [currentRef, setCurrentRef] = useState()

  const contextValue = {
    ...config,
    cursors: [
      { id: 'default-cursor', component: () => <div>☄️</div> },
      ...config.cursors,
    ],
    currentRef,
    setCurrentCursor,
    setCurrentRef,
  }

  return (
    <CursorProviderWrapper value={contextValue}>
      <GlobalStyle />
      <CurrentCursor nextCursor={currentCursor} nextRef={currentRef} />
      {children}
    </CursorProviderWrapper>
  )
}

export default CursorProvider
