import * as React from 'react'
import CursorProvider from './lib/CursorProvider'
import useCursor from './hooks/useCursor'
import Cursor from './lib/Cursor'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div>Example Component: {text}</div>
}

export { CursorProvider, useCursor, Cursor }
