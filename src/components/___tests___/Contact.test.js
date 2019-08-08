import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Contact from '../Contact'

describe('<Contact/>', () => {
  it('should render properly and match the snapshot', async () => {
    const wrapper = shallow(<Contact />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
