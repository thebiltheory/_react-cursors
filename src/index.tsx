import * as React from 'react'
import styles from './styles.module.css'
import CursorProvider from './lib/CursorProvider'
import useCursor from './lib/useCursor'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { CursorProvider, useCursor }
