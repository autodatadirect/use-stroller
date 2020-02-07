import targets from './targets'

const getY = element => element.getBoundingClientRect().top + window.scrollY

const getRegisteredYValues = () => Object.values(targets).map(ref => getY(ref.current))

const scrollTo = top => window.scrollTo({ top, left: 0, behavior: 'smooth' })

const scrollToTopElement = ({ offset = 0 } = {}) => scrollTo(Math.min(...getRegisteredYValues()) + offset)

const scrollToBottomElement = ({ offset = 0 } = {}) => scrollTo(Math.max(...getRegisteredYValues()) + offset)

const scrollToName = ({ name, offset = 0 } = {}) => {
  if (!targets[name]) return
  scrollTo(getY(targets[name].current) + offset)
}

export default () => {
  return {
    scrollTo,
    scrollToTopElement,
    scrollToBottomElement,
    scrollToName
  }
}
