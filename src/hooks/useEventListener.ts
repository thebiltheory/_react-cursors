import { useRef, useEffect } from 'react'

/**
 * useEventListener
 * @param eventName Mouse events - https://developer.mozilla.org/en-US/docs/Web/Events
 * @param handler function
 * @param element html element
 *
 * @todo Don't run if handler is undefined.
 * For example if a prop handle is undefined
 */
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

    if (!callback.current) return
    const eventListener = (event: Event) => callback.current(event)

    element.addEventListener(eventName, eventListener)

    return () => element.removeEventListener(eventName, eventListener)
  }, [eventName, element])
}
