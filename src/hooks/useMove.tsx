import { useState } from 'react'

export default function useMove() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const mouseHandle = (event: any) => {
    if (event.persist) event.persist()

    setPosition((_) => ({
      x: event.clientX,
      y: event.clientY,
    }))
  }

  return { x: position.x, y: position.y, mouseHandle }
}
