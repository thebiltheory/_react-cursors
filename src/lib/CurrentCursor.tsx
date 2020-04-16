import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 *
 * Todo:
 * Needs to do something:
 * - onClick
 * - onProximity
 * - onMouseOver
 * - onMouseOut
 *
 */

const CurrentCursor = ({ nextCursor, cursorPosition }: any) => {
  const [CurrentCursor, setCurrentCursor] = useState(nextCursor)
  const [position, setPosition] = useState(cursorPosition)

  useEffect(() => {
    setCurrentCursor(nextCursor)
  }, [nextCursor])

  useEffect(() => {
    setPosition(cursorPosition)
  }, [cursorPosition])

  return (
    <motion.div
      animate={{ x: position.x, y: position.y, position: 'absolute' }}
    >
      {CurrentCursor}
    </motion.div>
  )
}

export default CurrentCursor
