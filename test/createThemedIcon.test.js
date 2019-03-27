import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Icon4K } from '../src/Icon4K'
import { Filled4K } from '../src/Filled4K'
import { Outline4K } from '../src/Outline4K'
import { Round4K } from '../src/Round4K'
import { Sharp4K } from '../src/Sharp4K'
import { TwoTone4K } from '../src/TwoTone4K'

configure({adapter: new Adapter()})

describe('createThemedIcon', () => {
  function getPathDraw (wrapper) {
    return wrapper.childAt(0).props().d
  }

  test('should render filled theme by default', () => {
    const wrapper = shallow(<Icon4K>innerHTML</Icon4K>)
    const wrapperFilled = shallow(<Filled4K>innerHTML</Filled4K>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperFilled))
  })

  test('should render filled theme', () => {
    const wrapper = shallow(<Icon4K theme="filled">innerHTML</Icon4K>)
    const wrapperFilled = shallow(<Filled4K>innerHTML</Filled4K>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperFilled))
  })

  test('should render outlined theme', () => {
    const wrapper = shallow(<Icon4K theme="outline">innerHTML</Icon4K>)
    const wrapperOutlined = shallow(<Outline4K>innerHTML</Outline4K>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperOutlined))
  })

  test('should render rounded theme', () => {
    const wrapper = shallow(<Icon4K theme="round">innerHTML</Icon4K>)
    const wrapperRounded = shallow(<Round4K>innerHTML</Round4K>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperRounded))
  })

  test('should render sharp theme', () => {
    const wrapper = shallow(<Icon4K theme="sharp">innerHTML</Icon4K>)
    const wrapperSharp = shallow(<Sharp4K>innerHTML</Sharp4K>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperSharp))
  })

  test('should render two-tone theme', () => {
    const wrapper = shallow(<Icon4K theme="two-tone">innerHTML</Icon4K>)
    const wrapperTwoTone = shallow(<TwoTone4K>innerHTML</TwoTone4K>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperTwoTone))
  })
})
