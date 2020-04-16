import React from 'react'
import { Cursor } from 'react-cursors'
import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
  in: {},
  out: {},
  mouseDown: {
    fontSize: '30px',
  },

  mouseUp: {
    fontSize: '10px',
  },

  click: {
    rotate: [0, 360],
  },
}

const StarFinger = () => {
  const [animation, setAnimation] = useState()

  return (
    <Cursor
      onDoubleClick={() => console.log('Double Click')}
      onClick={() => setAnimation('click')}
      onMouseUp={() => setAnimation('mouseUp')}
      onMouseDown={() => setAnimation('mouseDown')}
      onAuxClick={() => console.log('Auxiliary Click')}
      onContextMenu={() => console.log('Context Menu')}
      // onMouseMove={() => console.log('Mouse Moving')}
      onMouseEnter={() => console.log('Mouse Entered')}
      onMouseLeave={() => console.log('Mouse Left')}
    >
      <motion.div animate={animation} variants={variants}>
        ★
      </motion.div>
    </Cursor>
  )
}

export default StarFinger
