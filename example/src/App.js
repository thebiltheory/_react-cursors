import React from 'react'

import { CursorProvider } from 'react-cursors'
import Card from './components/Card'
import Section from './components/Section'
import StarFinger from './cursors/StarFinger'

const images = [
  'https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1586795007873-95ba8f0d3be7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1531503375817-ec623ec5bcb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3149&q=80',
]

const config = {
  cursors: [
    { id: 'star-fingers', component: StarFinger },
    { id: 'circle', component: () => <div>Hello Circle</div> },
    { id: 'algerie-flag', component: () => <div>🇩🇿</div> },
  ],
}

const App = () => {
  return (
    <CursorProvider config={config}>
      <Section>
        {images.map((url) => (
          <Card image={url} />
        ))}
      </Section>
    </CursorProvider>
  )
}

export default App
