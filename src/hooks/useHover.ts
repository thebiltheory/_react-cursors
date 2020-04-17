import { useState, useRef, useCallback, useEffect } from 'react'
import useCursorContext from './useCursorContext'

export default function useHover() {
  const [value, setValue] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const { setIsHovering } = useCursorContext()

  const handleMouseEvents = useCallback(
    ({ clientX: x, clientY: y }) => {
      if (ref && ref.current) {
        const { bottom, left, right, top } = ref.current.getBoundingClientRect()
        const isOverlapping = x >= left && x <= right && y >= top && y <= bottom
        setIsHovering(isOverlapping)
        setValue(isOverlapping)
      }
    },
    [setValue, ref]
  )

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('mouseenter', (e) => {
        handleMouseEvents(e)
      })
      ref.current.addEventListener('mouseleave', (e) => {
        handleMouseEvents(e)
      })
    }

    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener('mouseenter', handleMouseEvents)
        ref.current.removeEventListener('mouseleave', handleMouseEvents)
      }
    }
  }, [ref, handleMouseEvents])

  return [ref, value]
}
