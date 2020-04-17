import { useState, useCallback } from 'react'

interface IUseMouseHandles {
  onMouseEnter(event: Event): any
  onMouseLeave(event: Event): any
  setOnMouseEnter: any
  setOnMouseLeave: any
}

export default function useMouseHandles(): IUseMouseHandles {
  const [
    onMouseEnter,
    setCursorMouseEnterHandle,
  ] = useState((_: Event): any => {})

  const [
    onMouseLeave,
    setCursorMouseLeaveHandle,
  ] = useState((_: Event): any => {})

  const setOnMouseEnter = useCallback((enterHandle) => {
    setCursorMouseEnterHandle(enterHandle)
  }, [])

  const setOnMouseLeave = useCallback((leaveHandle) => {
    setCursorMouseLeaveHandle(leaveHandle)
  }, [])

  return {
    onMouseEnter,
    onMouseLeave,
    setOnMouseEnter,
    setOnMouseLeave,
  }
}
