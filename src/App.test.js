import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import App from './App'

describe('App', () => {
  it('renders', () => {
    const output = TestUtils.renderIntoDocument(<App />)
    const header = TestUtils.findRenderedDOMComponentWithTag(output, 'h2')

    expect(header.textContent).toContain('App is running!')
  })
})
