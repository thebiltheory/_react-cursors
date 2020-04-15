import React from 'react'
import { useCursor } from 'react-cursors'

const Card = () => {
  const [StarFingers, starRef] = useCursor('star-fingers')

  return (
    <section ref={starRef}>
      <StarFingers />
      <div>Hello I'm a card</div>
    </section>
  )
}

export default Card
