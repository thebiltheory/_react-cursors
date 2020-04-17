import React from 'react'
import { Cursor } from 'react-cursors'
import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
  in: {
    scale: 2,
    color: '#000',
    background: '#fff',
  },

  out: {
    scale: 1,
    color: '#fff',
    background: '#000',
  },

  mouseDown: {
    fontSize: '150px',
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
      className='star-platinum'
      onDoubleClick={() => console.log('Double Click')}
      onClick={() => setAnimation('click')}
      // onMouseUp={() => setAnimation('mouseUp')}
      // onMouseDown={() => setAnimation('mouseDown')}
      onAuxClick={() => console.log('Auxiliary Click')}
      onContextMenu={() => console.log('Context Menu')}
      onMouseMove={() => ''}
      onMouseEnter={() => setAnimation('in')}
      onMouseLeave={() => setAnimation('out')}
    >
      <motion.div
        style={{
          color: 'white',
          transformOrigin: 'center',
          padding: 0,
          lineHeight: 0,
          height: '20px',
          width: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50px',
        }}
        animate={animation}
        variants={variants}
      >
        +
      </motion.div>
    </Cursor>
  )
}

export default StarFinger
