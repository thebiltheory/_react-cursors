import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import useMove from './useMove'
import useEventListener from '../utils/useEventListener'
import { CursorContext } from './CursorContext'

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

const CurrentCursor = ({ nextCursor }: any) => {
  const [currentCursorId, setCurrentCursorId] = useState(nextCursor)
  const { cursors } = useContext<any>(CursorContext)

  const { x, y, mouseHandle } = useMove()

  useEffect(() => {
    setCurrentCursorId(nextCursor)
  }, [nextCursor])

  const extractedCursor = cursors.find(
    (cursor: any) => cursor.id === currentCursorId
  )

  if (!extractedCursor.component) {
    throw new Error(`We didn't find cursor with id ${nextCursor}`)
  }

  const Cursor = extractedCursor.component

  useEventListener('mousemove', mouseHandle)

  return (
    <motion.div animate={{ x, y, position: 'absolute' }}>
      <Cursor />
    </motion.div>
  )
}

export default CurrentCursor
