import React from 'react'
import { useCursor } from 'react-cursors'

const Card = () => {
  const starRef = useCursor('star-fingers')
  const circleRef = useCursor('circle')

  return (
    <>
      <section
        ref={starRef}
        style={{ backgroundColor: 'mediumspringgreen', padding: '150px' }}
      >
        <div>Star Fingers</div>
      </section>
      <section
        ref={circleRef}
        style={{ backgroundColor: 'crimson', padding: '150px', color: 'white' }}
      >
        <div>Circle Cursor</div>
      </section>
    </>
  )
}

export default Card
