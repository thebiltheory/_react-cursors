import { useState, useRef, useCallback } from 'react'

export default function useHover() {
  const [value, setValue] = useState(false)

  const ref = useRef<any>(null)
  const timerRef = useRef<any>(null)

  const handleMouseOver = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      setValue(true)
    }, 0)
  }, [setValue])

  const handleMouseOut = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      setValue(false)
    }, 0)
  }, [setValue])

  const callbackRef = useCallback(
    (node: any): any => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', handleMouseOver)
        ref.current.removeEventListener('mouseout', handleMouseOut)
      }

      ref.current = node

      if (ref.current) {
        ref.current.addEventListener('mouseover', handleMouseOver)
        ref.current.addEventListener('mouseout', handleMouseOut)
      }
    },
    [handleMouseOut, handleMouseOver]
  )

  return [callbackRef, value]
}
