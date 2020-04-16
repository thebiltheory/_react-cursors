import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { CursorContext } from './CursorProvider'

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
  const [currentCursorId, setCurrentCursorId] = useState(nextCursor)

  const [position, setPosition] = useState(cursorPosition)

  const { cursors } = useContext<any>(CursorContext)

  useEffect(() => {
    setCurrentCursorId(nextCursor)
  }, [nextCursor])

  useEffect(() => {
    setPosition(cursorPosition)
  }, [cursorPosition])

  const extractedCursor = cursors.find(
    (cursor: any) => cursor.id === currentCursorId
  )

  if (!extractedCursor.component) {
    throw new Error('Something went ')
  }

  const Cursor = extractedCursor.component

  return (
    <motion.div
      animate={{ x: position.x, y: position.y, position: 'absolute' }}
    >
      <Cursor />
    </motion.div>
  )
}

export default CurrentCursor
