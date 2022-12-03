import { render } from '@redwoodjs/testing/web'

import ProviderIcons from './ProviderIcons'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProviderIcons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProviderIcons />)
    }).not.toThrow()
  })
})
