import React, { useRef, createContext, useCallback, useEffect } from 'react'
import targets from './targets'
import useRender from './useRender'

export const context = createContext()
let nextId = 0

export default ({ children, startDisabled = false, name }) => {
  const idRef = useRef(name || nextId++)
  const ref = useRef()
  const render = useRender()

  const id = idRef.current

  const setEnabled = useCallback(enable => {
    if (enable) {
      targets[id] = ref
    } else {
      delete targets[id]
    }
    render()
  }, [targets, id])

  useEffect(() => {
    if (!startDisabled) {
      targets[id] = ref
      render()
    }
  }, [])

  const enabled = !!targets[id]

  const value = { enabled, setEnabled }

  return <context.Provider value={value}><div ref={ref}>{children}</div></context.Provider>
}
