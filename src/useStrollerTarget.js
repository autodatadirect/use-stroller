import { useContext } from 'react'
import { context } from './StrollerTarget'

export default () => {
  const contextValue = useContext(context)
  if (!contextValue) throw new Error('useStrollerElement must be used in within a <StrollerTarget />')
  const { enabled, setEnabled } = contextValue
  return [enabled, setEnabled]
}
