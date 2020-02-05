import { useRef } from 'react'

let nextId = 0

const elements = {}

const getY = element => element.getBoundingClientRect().top + window.scrollY

const getRegisteredYValues = () => Object.values(elements).map(ref => getY(ref.current))

const scrollTo = top => window.scrollTo({ top, left: 0, behavior: 'smooth' })

const scrollToTopElement = ({ offset = 0 } = {}) => scrollTo(Math.min(...getRegisteredYValues()) + offset)

const scrollToBottomElement = ({ offset = 0 } = {}) => scrollTo(Math.max(...getRegisteredYValues()) + offset)

const useStrollerControl = () => {
  return {
    scrollToTopElement,
    scrollToBottomElement
  }
}

const useStrollerElement = ({ enabled }) => {
    const id = useRef(nextId++)
    const ref = useRef()
  
    if (enabled) {
      elements[id.current] = ref
    } else {
      delete elements[id.current]
    }
  
    return ref
  }

export {
  useStrollerControl,
  useStrollerElement
}
