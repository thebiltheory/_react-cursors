import React from 'react'
import { useCursor } from 'react-cursors'

const Card = () => {
  // const [starRef, isHover, isNear] = useCursor('star-fingers')
  const [starRef, isHover] = useCursor('star-fingers')
  return (
    <section
      ref={starRef}
      style={{
        backgroundColor: isHover ? 'mediumspringgreen' : 'yellow',
        padding: '150px',
      }}
    >
      <div>Star Fingers</div>
    </section>
  )
}

export default Card
