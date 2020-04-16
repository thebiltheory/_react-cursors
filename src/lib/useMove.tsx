import { useState } from 'react'

export default function useMove() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const mouseHandle = (event: any) => {
    event.persist()
    setPosition((position) => ({
      ...position,
      x: event.clientX,
      y: event.clientY,
    }))
  }

  const { x, y } = position

  return { x, y, mouseHandle }
}
