import React from 'react'
import Hero from '../Hero'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('<Hero/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Hero />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
