import { useRef, useEffect } from 'react'

export default function useEventListener(
  eventName: string,
  handler: any,
  element = window
) {
  const callback = useRef((_: Event) => {})

  useEffect(() => {
    callback.current = handler
  }, [handler])

  useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = (event: Event) => callback.current(event)

    element.addEventListener(eventName, eventListener)

    return () => element.removeEventListener(eventName, eventListener)
  }, [eventName, element])
}
