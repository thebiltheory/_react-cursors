import { useState, useRef, useCallback, useEffect } from 'react'

export default function useHover() {
  const [value, setValue] = useState(false)

  const ref = useRef<any>(null)

  const handleMouseOver = useCallback(() => {
    setValue(true)
  }, [setValue])

  const handleMouseOut = useCallback(() => {
    setValue(false)
  }, [setValue])

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('mouseover', handleMouseOver)
      ref.current.addEventListener('mouseleave', handleMouseOut)
    }

    return () => {
      ref.current.removeEventListener('mouseover', handleMouseOver)
      ref.current.removeEventListener('mouseleave', handleMouseOut)
    }
  }, [ref, handleMouseOver, handleMouseOut])

  return [ref, value]
}
