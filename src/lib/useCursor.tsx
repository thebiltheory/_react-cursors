import { useContext, useEffect } from 'react'
import { CursorContext } from './CursorContext'
import useHover from '../utils/useHover'

export const useCursor = (id: string) => {
  const { cursors, setCurrentCursor } = useContext<any>(CursorContext)
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
