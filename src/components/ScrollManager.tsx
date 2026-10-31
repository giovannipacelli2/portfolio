import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** On navigation scrolls to the #hash target if present, otherwise to the top. */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash, key])

  return null
}
