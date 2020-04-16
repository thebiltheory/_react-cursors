import React from 'react'

import { CursorProvider } from 'react-cursors'
import Card from './components/Card'
import Section from './components/Section'
import StarFinger from './cursors/StarFinger'

const config = {
  cursors: [
    { id: 'star-fingers', component: StarFinger },
    { id: 'circle', component: () => <div>Hello Circle</div> },
    { id: 'algerie-flag', component: () => <div>🇩🇿</div> },
  ],
}

const App = () => {
  const items = new Array(6).fill(null)

  return (
    <CursorProvider config={config}>
      <Section>
        {items.map((card, index) => {
          return (
            <div style={{ margin: '50px' }} key={`card-${index}`}>
              <Card />
            </div>
          )
        })}
      </Section>
    </CursorProvider>
  )
}

export default App
