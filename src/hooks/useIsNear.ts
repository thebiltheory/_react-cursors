import { useState, useEffect, useCallback } from 'react'

// import useEventListener from './useEventListener'
// import { useViewportScroll } from 'framer-motion'
const distancePoints = (x1: any, y1: any, x2: any, y2: any) =>
  Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))

export default function useIsNear(element: any) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [closestPoint, setClosestPoint] = useState({ x: 0, y: 0 })
  const [el, setEl] = useState(element)
  const [coords, setCoords] = useState({
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  })

  const docScrolls = {
    left: document.body.scrollLeft + document.documentElement.scrollLeft,
    top: document.body.scrollTop + document.documentElement.scrollTop,
  }
  // const { scrollY } = useViewportScroll()

  const isNearHandle = useCallback(
    ({ clientX: x, clientY: y }: any) => {
      if (el && el.current) {
        const {
          height,
          width,
          left,
          top,
          // right,
        } = el.current.getBoundingClientRect()
        setPos({ x, y })
        setCoords({
          x1: left + docScrolls.left,
          x2: width + left + docScrolls.left,
          y1: top + docScrolls.top,
          y2: height + top + docScrolls.top,
        })
      }
    },
    [el, setPos, setCoords]
  )

  useEffect(() => {
    console.log(pos)
    if (pos.x < coords.x1) {
      setClosestPoint({
        ...closestPoint,
        x: coords.x1,
      })
    } else if (pos.x > coords.x2) {
      setClosestPoint({
        ...closestPoint,
        x: coords.x2,
      })
    }

    if (pos.y < coords.y1) {
      setClosestPoint({
        ...closestPoint,
        y: coords.y1,
      })
    } else if (pos.y > coords.y2) {
      setClosestPoint({
        ...closestPoint,
        y: coords.y2,
      })
    }
  }, [coords, closestPoint, pos])

  useEffect(() => {
    if (element) {
      setEl(element)
    }
  }, [element])

  return [
    distancePoints(pos.x, pos.y, closestPoint.x, closestPoint.y),
    isNearHandle,
  ] as const
}
