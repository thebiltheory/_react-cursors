import React from 'react'
import { useCursor } from 'react-cursors'

const Card = ({ image }) => {
  // const [starRef, isHover, isNear] = useCursor('star-fingers')
  const [starRef, isHover, isNear] = useCursor('star-fingers', {
    // Announce when the cursor is near
    // Wondering if I should do this by default
    proximity: true,

    // Lock cursors upon a certain treshhold
    lock: true,
  })

  return (
    <article
      ref={starRef}
      style={{
        maxWidth: '300px',
        backgroundColor: isHover ? 'mediumspringgreen' : 'lightsteelblue',
        margin: '10px',
      }}
    >
      <img
        style={{ maxWidth: '100%', width: '45vw' }}
        src={image}
        alt='React Cursors Example'
      />
    </article>
  )
}

export default Card
