import React from 'react'

import { ExampleComponent, CursorProvider } from 'react-cursors'
import Card from './components/Card'

const Fingers = () => <div>💫🤞🏽Star Fingers</div>

const config = {
  cursors: [
    { id: 'star-fingers', component: Fingers },
    { id: 'circle', component: () => <div>Hello Circle</div> },
  ],
}

const App = () => {
  return (
    <CursorProvider config={config}>
      <section>
        <div>
          <Card />
        </div>
      </section>
      {/* <ExampleComponent text='Create React Library Example 😄' /> */}
    </CursorProvider>
  )
}

export default App
