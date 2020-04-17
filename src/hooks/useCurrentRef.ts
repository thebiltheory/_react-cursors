import { useState } from 'react'
export default function useCurrentRef(ref?: any) {
  const [currentRef, setCurrentRef] = useState(ref)
  console.log(currentRef)

  // useEffect(() => {
  //   console.log('currentRef', currentRef)
  //   setCurrentRef(ref)
  // }, [ref])

  return [currentRef, setCurrentRef]
}
