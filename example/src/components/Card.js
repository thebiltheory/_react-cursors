import React from 'react'
import { useCursor } from 'react-cursors'

const Card = ({ image }) => {
  // const [starRef, isHover, isNear] = useCursor('star-fingers')
  const [starRef, isHover] = useCursor(
    'star-fingers' /* {
    onMouseEnter: () => 'mouse entered card',
    onMouseLeave: () => 'mouse left card',
  } */
  )

  return (
    <article
      ref={starRef}
      style={{
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
