import React, { createContext, useState, useCallback } from 'react'
import Cursor from './Cursor'
import useEventListener from '../utils/useEventListener'

export const CursorContext = createContext({})

const CursorProvider: React.FC<any> = ({ config, children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentCursor, setCurrentCursor] = useState(<div>Default</div>)

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) => {
      setMousePosition({ x, y })
    },
    [setMousePosition]
  )

  useEventListener('mousemove', onMouseMove)

  const contextValue = {
    ...config,
    cursors: [
      { id: 'default-cursor', component: () => <div>☄️</div> },
      ...config.cursors,
    ],
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
