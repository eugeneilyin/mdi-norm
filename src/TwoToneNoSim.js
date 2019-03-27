import React from 'react'
import { Icon } from './Icon'
import { b, bne } from './fragments'

export const TwoToneNoSim = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M7 19h9.23L7 9.77z"/><path d={"M3.79 3.74L2.38 5.15" + bne}/><path opacity=".3" d={"M10.84 5L9.36 6.47 17 14.11V5z"}/><path d={"M10.84 5H17v9.11l2 2V5" + b + "h-6.99L7.95 5.06l1.41 1.41z"}/>
</Icon>
