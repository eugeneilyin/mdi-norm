import React from 'react'
import { Icon } from './Icon'
import { dp, pi, baw } from './fragments'

export const RoundPortrait = /*#__PURE__*/ props => <Icon {...props}>
  <path d={pi + dp + "m-1 16H6" + baw}/>
</Icon>
