import { Component as C, createElement as h } from 'react'
import { PropTypes } from 'prop-types'

export class Icon extends C {
  shouldComponentUpdate(nextProps) {
    const thisProps = this.props

    if (thisProps === nextProps) {
      return false
    }

    const thisKeys = Object.keys(thisProps)
    const nextKeys = Object.keys(nextProps)

    if (thisKeys.length !== nextKeys.length) {
      return true
    }

    for (let i = 0; i < thisKeys.length; i++) {
      const key = thisKeys[i]

      if (key === 'children') {
        continue
      }

      if (!nextProps.hasOwnProperty(key)) {
        return true
      }

      const thisValue = thisProps[key]
      const nextValue = nextProps[key]

      if (thisValue !== nextValue) {
        return true
      }
    }
    return false
  }

  render() {
    const { component, title, fill, opacity, shade, state, size, viewBox, children, ...rest } = this.props
    let props = title != null ? { role: 'img', 'aria-label': 'title' } : { 'aria-hidden': true }
    props.fill = fill != null ? fill
      : shade === 'on-light' ? state === 'error' ? '#B00020' : '#000000'
        : shade === 'on-dark' ? state === 'error' ? '#FF6E6E' : '#FFFFFF'
          : 'currentColor'
    props.opacity = opacity != null ? opacity
      : shade === 'on-light' ? state === 'focused' ? '.87' : state === 'active' ? '.54' : state === 'inactive' ? '.38' : state === 'error' ? '1' : undefined
        : shade === 'on-dark' ? state === 'focused' ? '1' : state === 'active' ? '.7' : state === 'inactive' ? '.5' : state === 'error' ? '1' : undefined
          : undefined
    props.width = props.height = size != null ? size : 24
    props.viewBox = viewBox != null ? viewBox : '0 0 24 24'
    return h(component != null ? component : 'svg', { ...props, ...rest },
      title != null ? [h('title', { key: title }, title), children] : children)
  }
}

Icon.propTypes /* remove-proptypes */ = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  state: PropTypes.oneOf(['focused', 'active', 'inactive', 'error']),
  shade: PropTypes.oneOf(['on-light', 'on-dark']),
  fill: PropTypes.string,
  title: PropTypes.string,
  component: PropTypes.node,
  children: PropTypes.node.isRequired
}
