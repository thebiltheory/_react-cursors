import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { CursorContext } from './CursorProvider'
import useMove from './useMove'
import useEventListener from '../utils/useEventListener'

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
    throw new Error('Something went ')
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
