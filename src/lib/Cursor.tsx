import React from 'react'
import useEventListener from '../utils/useEventListener'

const Cursor: any = ({
  children,
  onClick,
  onAuxClick,
  onDoubleClick,
  onMouseUp,
  onContextMenu,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
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
  useEventListener('mouseenter', onMouseEnter)

  /**
   * onMouseLeave
   */
  useEventListener('mouseleave', onMouseLeave)

  return <div>{children}</div>
}

export default Cursor
