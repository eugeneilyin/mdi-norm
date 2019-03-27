import React from 'react'
import { render } from 'react-dom'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Icon } from '../src/Icon'

configure({adapter: new Adapter()})

describe('<Icon />', () => {
  test('should render with default props', () => {
    const wrapper = shallow(
      <Icon>
        <path d="M0 1" />
      </Icon>,
    )
    expect(wrapper.type()).toBe('svg')
    expect(wrapper.props()['aria-hidden']).toEqual(true)
    expect(wrapper.props().width).toEqual(24)
    expect(wrapper.props().height).toEqual(24)
    expect(wrapper.props().viewBox).toEqual('0 0 24 24')
    expect(wrapper.props().fill).toEqual('currentColor')
    expect(wrapper.props().opacity).toEqual(undefined)
    expect(wrapper.contains(<path d="M0 1" />)).toEqual(true)
  })

  test('should handle semantic icon rendering', () => {
    const wrapper = shallow(<Icon title={'title'}>child</Icon>)
    expect(wrapper.props().role).toEqual('img')
    expect(wrapper.props()['aria-label']).toEqual('title')
    expect(wrapper.contains(<title>title</title>)).toEqual(true)
    expect(wrapper.contains('child')).toEqual(true)
  })

  test('should handle size change', () => {
    const wrapper = shallow(<Icon size={100}>{''}</Icon>)
    expect(wrapper.props().width).toEqual(100)
    expect(wrapper.props().width).toEqual(100)
  })

  test('should handle light shade', () => {
    const wrapper = shallow(<Icon shade='on-light'>{''}</Icon>)
    expect(wrapper.props().fill).toEqual('#000000')
  })

  test('should handle dark shade', () => {
    const wrapper = shallow(<Icon shade='on-dark'>{''}</Icon>)
    expect(wrapper.props().fill).toEqual('#FFFFFF')
  })

  test('should handle focused state with on-light theme shade', () => {
    const wrapper = shallow(<Icon shade='on-light' state='focused'>{''}</Icon>)
    expect(wrapper.props().fill).toEqual('#000000')
    expect(wrapper.props().opacity).toEqual('.87')
  })

  test('should handle focused state with on-dark theme shade', () => {
    const wrapper = shallow(<Icon shade='on-dark' state='focused'>{''}</Icon>)
    expect(wrapper.props().fill).toEqual('#FFFFFF')
    expect(wrapper.props().opacity).toEqual('1')
  })

  test('should handle active state with on-light theme shade', () => {
    const wrapper = shallow(<Icon shade='on-light' state='active'>{''}</Icon>)
    expect(wrapper.props().fill).toEqual('#000000')
    expect(wrapper.props().opacity).toEqual('.54')
  })

  test('should handle active state with on-dark theme shade', () => {
    const wrapper = shallow(<Icon shade='on-dark' state='active'>{''}</Icon>)
    expect(wrapper.props().fill).toEqual('#FFFFFF')
    expect(wrapper.props().opacity).toEqual('.7')
  })

  test('should handle disabled state with on-light theme shade', () => {
    const wrapper = shallow(<Icon shade='on-light'
                                  state='inactive'>{''}</Icon>)
    expect(wrapper.props().fill).toEqual('#000000')
    expect(wrapper.props().opacity).toEqual('.38')
  })

  test('should handle disabled state with on-dark theme shade', () => {
    const wrapper = shallow(<Icon shade='on-dark' state='inactive'>{''}</Icon>)
    expect(wrapper.props().fill).toEqual('#FFFFFF')
    expect(wrapper.props().opacity).toEqual('.5')
  })

  test('should handle error state with on-light theme shade', () => {
    const wrapper = shallow(<Icon shade='on-light' state='error'>{''}</Icon>)
    expect(wrapper.props().opacity).toEqual('1')
    expect(wrapper.props().fill).toEqual('#B00020')
  })

  test('should handle focused state on dark shade', () => {
    const wrapper = shallow(<Icon shade='on-dark' state='error'>{''}</Icon>)
    expect(wrapper.props().opacity).toEqual('1')
    expect(wrapper.props().fill).toEqual('#FF6E6E')
  })

  test('should handle custom component rendering', () => {
    const wrapper = shallow(<Icon component={'span'}>{''}</Icon>)
    expect(wrapper.type()).toEqual('span')
  })

  test('should handle custom viewBox rendering', () => {
    const wrapper = shallow(<Icon viewBox={'0 0 18 18'}>{''}</Icon>)
    expect(wrapper.props().viewBox).toEqual('0 0 18 18')
  })
})
