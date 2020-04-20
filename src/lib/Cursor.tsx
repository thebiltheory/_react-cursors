import React from 'react'
import useEventListener from '../hooks/useEventListener'

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
  currentElement,
}: any) => {
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
  useEventListener('mouseenter', onMouseEnter, currentElement.current)

  /**
   * onMouseLeave
   */
  useEventListener('mouseleave', onMouseLeave, currentElement.current)

  return <div className={className}>{children}</div>
}

export default Cursor
