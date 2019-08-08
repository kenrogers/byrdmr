import React from 'react'
import Header from '../Header'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('<Header/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
