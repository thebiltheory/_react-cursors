import { useState, useRef, useEffect, useCallback } from 'react'

export default function useHover() {
  const [value, setValue] = useState(false)

  const ref = useRef(null)

  const handleMouseOver = useCallback(() => setValue(true), [setValue])
  const handleMouseOut = useCallback(() => setValue(false), [setValue])

  useEffect(
    (): any => {
      const node: any = ref.current
      if (node) {
        node.addEventListener('mouseenter', handleMouseOver)
        node.addEventListener('mouseleave', handleMouseOut)

        return () => {
          node.removeEventListener('mouseenter', handleMouseOver)
          node.removeEventListener('mouseleave', handleMouseOut)
        }
      }
    },
    [ref.current] // Recall only if ref changes
  )

  return [ref, value]
}
