import React, { createContext, useState } from 'react'

import CurrentCursor from './CurrentCursor'
import useMove from './useMove'

export const CursorContext = createContext({})

const CursorProvider: React.FC<any> = ({ config, children }) => {
  const { mouseHandle } = useMove()
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentCursor, setCurrentCursor] = useState('default-cursor')

  // const onMouseMove = useCallback(
  //   ({ clientX: x, clientY: y }) => {
  //     setMousePosition({ x, y })
  //   },
  //   [setMousePosition]
  // )

  // useEventListener('mousemovea', onMouseMove)

  const contextValue = {
    ...config,
    cursors: [
      { id: 'default-cursor', component: () => <div>☄️</div> },
      ...config.cursors,
    ],
    setCurrentCursor,
  }

  return (
    <div onMouseMove={mouseHandle}>
      <CursorContext.Provider value={contextValue}>
        <CurrentCursor nextCursor={currentCursor} />
        {children}
      </CursorContext.Provider>
    </div>
  )
}

export default CursorProvider
