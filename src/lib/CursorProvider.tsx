import React, { createContext, useState, useCallback } from 'react'
import useEventListener from '../utils/useEventListener'
import CurrentCursor from './CurrentCursor'

export const CursorContext = createContext({})

const CursorProvider: React.FC<any> = ({ config, children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentCursor, setCurrentCursor] = useState('default-cursor')

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
      <CurrentCursor
        nextCursor={currentCursor}
        cursorPosition={mousePosition}
      />
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider
