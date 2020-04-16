import React from 'react'
import { Cursor } from 'react-cursors'

const StarFinger = () => {
  return (
    <Cursor
      onDoubleClick={() => console.log('Double Click')}
      onClick={() => console.log('Single Click')}
      onMouseUp={() => console.log('MouseUp')}
      onAuxClick={() => console.log('Auxiliary Click')}
      onContextMenu={() => console.log('Context Menu')}
      onMouseMove={() => console.log('Mouse Moving')}
      onMouseEnter={() => console.log('Mouse Entered')}
      onMouseLeave={() => console.log('Mouse Left')}
    >
      <div style={{ fontSize: '40px' }}>★</div>
    </Cursor>
  )
}

export default StarFinger
