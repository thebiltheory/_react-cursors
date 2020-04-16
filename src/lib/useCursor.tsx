import { useContext, useEffect } from 'react'
import { CursorContext } from './CursorProvider'
import useHover from '../utils/useHover'

export const useCursor = (id: string) => {
  const { cursors, setCurrentCursor } = useContext<any>(CursorContext)
  const cursor = cursors.find((cursor: any) => cursor.id === id)
  const fallback = cursors.find((cursor: any) => cursor.id === 'default-cursor')
  const [hoverRef, isHovered] = useHover()

  if (!cursor) {
    throw new Error(
      `${id} doesn't exist amongst the cursors. Check the config of CursorProvider`
    )
  }

  const Component = cursor.component
  const DefaultCursor = fallback.component

  useEffect(() => {
    if (isHovered) {
      setCurrentCursor(Component)
    } else {
      setCurrentCursor(DefaultCursor)
    }
  }, [isHovered])

  return [hoverRef, isHovered /* isNear */]
}
export default useCursor
