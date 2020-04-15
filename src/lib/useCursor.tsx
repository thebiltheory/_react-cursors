import { useContext, useRef } from 'react'
import { CursorContext } from './CursorProvider'

// interface IUseCursor {
//   id: string
// }

export const useCursor: any = (id: string) => {
  const { cursors } = useContext<any>(CursorContext)
  const cursor = cursors.find((cursor: any) => cursor.id === id)
  const ref = useRef()

  if (!cursor) {
    throw new Error(
      `${id} doesn't exist amongst the cursors. Check the config of CursorProvider`
    )
  }

  const Component = cursor.component

  return [Component, ref]
}
export default useCursor
