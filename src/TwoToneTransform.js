import React from 'react'
import { Icon } from './Icon'
import { b, d } from './fragments'

export const TwoToneTransform = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M8 4h2L7 1 4 4h2v2H2v2h4v8" + d + "h8v2h-2l3 3 3-3h-2v-2h4v-2H8zm10 10V8" + b + "h-6v2h6v6z"}/>
</Icon>
