import React, { useState, useEffect, useContext, useCallback } from 'react'
import { motion } from 'framer-motion'
import { CursorContext } from './CursorContext'
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { cursors } = useContext<any>(CursorContext)

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) => {
      setMousePosition({ x, y })
    },
    [setMousePosition]
  )

  useEventListener('mousemove', onMouseMove)

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

  return (
    <motion.div
      animate={{ x: mousePosition.x, y: mousePosition.y, position: 'absolute' }}
    >
      <Cursor />
    </motion.div>
  )
}

export default CurrentCursor
