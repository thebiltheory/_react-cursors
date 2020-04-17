import React, { useState } from 'react'
import useEventListener from '../hooks/useEventListener'
import useCursorContext from '../hooks/useCursorContext'

interface ICursor {
  children: React.ReactNode
  onClick: MouseEvent
  onAuxClick: MouseEvent
  onDoubleClick: MouseEvent
  onMouseUp: MouseEvent
  onMouseDown: MouseEvent
  onContextMenu: MouseEvent
  onMouseMove: MouseEvent
  onMouseEnter: MouseEvent
  onMouseLeave: MouseEvent
}

const Cursor: React.FC<ICursor> = ({
  className,
  children,
  onClick,
  onAuxClick,
  onDoubleClick,
  onMouseUp,
  onMouseDown,
  onContextMenu,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
}: any) => {
  const { isHovering } = useCursorContext()

  /**
   * On Click
   */
  useEventListener('mousedown', onClick)

  /**
   * onAuxClick
   */
  useEventListener('auxclick', onAuxClick)

  /**
   * onDoubleClick
   */
  useEventListener('dblclick', onDoubleClick)

  /**
   * onMouseUp
   */
  useEventListener('mouseup', onMouseUp)

  /**
   * onMouseDown
   */
  useEventListener('mousedown', onMouseDown)

  /**
   * onContextMenu
   */
  useEventListener('contextmenu', onContextMenu)

  /**
   * onMouseMove
   */
  useEventListener('mousemove', onMouseMove)

  /**
   * onMouseEnter
   */
  const [entered, setEntered] = useState(false)
  if (isHovering && !entered) {
    onMouseEnter()
    setEntered(true)
  }

  /**
   * onMouseLeave
   */
  const [left, setLeft] = useState(false)
  if (!isHovering && !left) {
    onMouseLeave()
    setLeft(true)
  }

  return <div className={className}>{children}</div>
}

export default Cursor
