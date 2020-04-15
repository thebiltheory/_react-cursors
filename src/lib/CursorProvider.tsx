import React, { createContext, useState, useEffect } from 'react'
import Cursor from './Cursor'

export const CursorContext = createContext({})

const CursorProvider: React.FC<any> = ({ config, children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentCursor, setCurrentCursor] = useState(<div>Default</div>)
  console.log(mousePosition, currentCursor)

  const onMouseMove = (event: any) => {
    const { pageX: x, pageY: y } = event
    setMousePosition({ x, y })
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  })

  const contextValue = {
    ...config,
    setCurrentCursor,
  }

  return (
    <CursorContext.Provider value={contextValue}>
      <Cursor nextCursor={currentCursor} cursorPosition={mousePosition} />
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider
