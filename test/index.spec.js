import { expect } from 'chai'
import { createElement } from 'react'

import injectSubstyle from '../src/index'

describe('default export', () => {
  it('should be usable as a higher-order component', () => {
    const MyComp = ({ style }) => createElement('div', { ...style })
    const MyEnhancedComponent = injectSubstyle(MyComp)

    expect(MyEnhancedComponent.displayName).to.equal('withDefaultStyle(MyComp)')
  })

  it('should also serve as a proxy to `defaultStyle`', () => {
    const hoc = injectSubstyle({ color: 'red' })
    const MyComp = ({ style }) => createElement('div', { ...style })
    const MyEnhancedComponent = hoc(MyComp)

    expect(MyEnhancedComponent.displayName).to.equal('withDefaultStyle(MyComp)')
  })
})
