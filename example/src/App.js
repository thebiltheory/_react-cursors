import React from 'react'

import { ExampleComponent, CursorProvider } from 'react-cursors'
import Card from './components/Card'

const Fingers = () => <div>💫🤞🏽Star Fingers</div>

const config = {
  cursors: [
    { id: 'star-fingers', component: Fingers },
    { id: 'circle', component: () => <div>Hello Circle</div> },
    { id: 'algerie-flag', component: () => <div>🇩🇿</div> },
  ],
}

const App = () => {
  return (
    <CursorProvider config={config}>
      <Card />
    </CursorProvider>
  )
}

export default App
