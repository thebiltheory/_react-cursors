import { useContext, useEffect } from 'react'
import { CursorContext } from './CursorProvider'
import useHover from '../utils/useHover'

// interface IUseCursor {
//   id: string
// }

export const useCursor: any = (id: string) => {
  const { cursors, setCurrentCursor } = useContext<any>(CursorContext)
  const cursor = cursors.find((cursor: any) => cursor.id === id)
  const [hoverRef, isHovered] = useHover()

  if (!cursor) {
    throw new Error(
      `${id} doesn't exist amongst the cursors. Check the config of CursorProvider`
    )
  }

  const Component = cursor.component

  useEffect(() => {
    if (isHovered) {
      setCurrentCursor(Component)
    }
    console.log(isHovered)
  }, [isHovered])

  return hoverRef
}
export default useCursor
