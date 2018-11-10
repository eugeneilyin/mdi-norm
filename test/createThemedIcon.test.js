import { createElement as h } from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Icon4K } from '../src/Icon4K'
import { Icon4KFilled } from '../src/Icon4KFilled'
import { Icon4KOutlined } from '../src/Icon4KOutlined'
import { Icon4KRounded } from '../src/Icon4KRounded'
import { Icon4KTwoTone } from '../src/Icon4KTwoTone'
import { Icon4KSharp } from '../src/Icon4KSharp'

configure({ adapter: new Adapter() })

describe('createThemedIcon', () => {
  function getPathDraw(wrapper) {
    return wrapper.childAt(0).props().d
  }

  test('should render filled theme by default', () => {
    const wrapper = shallow(<Icon4K>innerHTML</Icon4K>)
    const wrapperFilled = shallow(<Icon4KFilled>innerHTML</Icon4KFilled>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperFilled))
  })

  test('should render filled theme', () => {
    const wrapper = shallow(<Icon4K theme="filled">innerHTML</Icon4K>)
    const wrapperFilled = shallow(<Icon4KFilled>innerHTML</Icon4KFilled>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperFilled))
  })

  test('should render outlined theme', () => {
    const wrapper = shallow(<Icon4K theme="outlined">innerHTML</Icon4K>)
    const wrapperOutlined = shallow(<Icon4KOutlined>innerHTML</Icon4KOutlined>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperOutlined))
  })

  test('should render rounded theme', () => {
    const wrapper = shallow(<Icon4K theme="rounded">innerHTML</Icon4K>)
    const wrapperRounded = shallow(<Icon4KRounded>innerHTML</Icon4KRounded>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperRounded))
  })

  test('should render sharp theme', () => {
    const wrapper = shallow(<Icon4K theme="sharp">innerHTML</Icon4K>)
    const wrapperSharp = shallow(<Icon4KSharp>innerHTML</Icon4KSharp>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperSharp))
  })

  test('should render two-tone theme', () => {
    const wrapper = shallow(<Icon4K theme="two-tone">innerHTML</Icon4K>)
    const wrapperTwoTone = shallow(<Icon4KTwoTone>innerHTML</Icon4KTwoTone>)
    expect(getPathDraw(wrapper)).toEqual(getPathDraw(wrapperTwoTone))
  })
})
