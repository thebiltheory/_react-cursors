import { useEffect } from 'react'
import useHover from './useHover'
import useCursorContext from './useCursorContext'

export const useCursor = (id: string) => {
  const { cursors, setCurrentCursor } = useCursorContext()
  const [hoverRef, isHovered] = useHover()
  const cursor = cursors.find((cursor: any) => cursor.id === id)

  if (!cursor) {
    throw new Error(
      `${id} doesn't exist amongst the cursors. Check the config of CursorProvider`
    )
  }

  useEffect(() => {
    if (isHovered) {
      setCurrentCursor(id)
    } else {
      setCurrentCursor('default-cursor')
    }
  }, [isHovered])

  return [hoverRef, isHovered /* isNear */]
}
export default useCursor
