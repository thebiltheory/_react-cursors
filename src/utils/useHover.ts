import { useState, useRef, useCallback, useEffect } from 'react'

export default function useHover() {
  const [value, setValue] = useState(false)

  const ref = useRef<HTMLElement>(null)

  const handleMouseEvents = useCallback(
    ({ clientX: x, clientY: y }) => {
      if (ref && ref.current) {
        console.log(x, y)
        const { bottom, left, right, top } = ref.current.getBoundingClientRect()
        console.log(left, right, top, bottom)

        const isOverlapping = x >= left && x <= right && y >= top && y <= bottom
        setValue(isOverlapping)
      }
    },
    [setValue, ref]
  )

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('mousemove', handleMouseEvents)
      ref.current.addEventListener('mouseleave', handleMouseEvents)
    }

    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener('mousemove', handleMouseEvents)
        ref.current.removeEventListener('mouseleave', handleMouseEvents)
      }
    }
  }, [ref, handleMouseEvents])

  return [ref, value]
}
