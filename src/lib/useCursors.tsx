import { useEffect, useState } from 'react'

export default function useCursors(currentCursors: any) {
  const [cursors, setCursors] = useState<any>(currentCursors)

  useEffect(() => {
    setCursors(currentCursors)
  }, [cursors])

  return [cursors, setCursors]
}
