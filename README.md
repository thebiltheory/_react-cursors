# WIP

# react-cursors

> Customize your react app with animated custom cursors

[![NPM](https://img.shields.io/npm/v/react-cursors.svg)](https://www.npmjs.com/package/react-cursors) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cursors
```

## Usage

Create a `Cursor` Component

```javascript
import React from 'react'

import { Cursor } from 'react-cursors'

const MyCustomCursor = () => {
  return (
    <Cursor
      className='star-platinum'
      onDoubleClick={() => console.log('Double Click')}
      onClick={() => console.log('click')}
      onMouseUp={() => console.log('mouseUp')}
      onMouseDown={() => console.log('mouseDown')}
      onAuxClick={() => console.log('Auxiliary Click')}
      onContextMenu={() => console.log('Context Menu')}
      onMouseMove={() => console.log('Mouse moving')}
      onMouseEnter={() => console.log('Just entered')}
      onMouseLeave={() => console.log('Just Left')}
    >
      🚀
    </Cursor>
  )
}
```

Configure the cursors

```javascript
const config = {
  cursors: [
    { id: 'my-cursor-id', component: MyCustomCursor },
    { id: 'circle', component: () => <div>⭕️</div> },
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
```

Use it

```javascript
import { useCursor } from 'react-cursors'

const Card = ({ image }) => {
  const [myCursorRef, isHover] = useCursor('my-cursor-id')

  return <article ref={myCursorRef}>Content</article>
}
```

## License

MIT © [TheBilTheory](https://github.com/TheBilTheory)
