import React from 'react'
import { Icon } from './Icon'
import { bar } from './fragments'

export const TwoToneFilterFrames = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M8 10h8v6H8z"/><path d={bar + "M6 18h12V8H6zm2-8h8v6H8z"}/>
</Icon>
