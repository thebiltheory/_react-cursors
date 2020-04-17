import { CursorContext } from '../lib/CursorContext'
import { useContext } from 'react'

export default function useCursorContext(): any {
  return useContext(CursorContext)
}
