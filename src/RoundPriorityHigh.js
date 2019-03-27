import React from 'react'
import { Icon } from './Icon'
import { b, c, d } from './fragments'

export const RoundPriorityHigh = /*#__PURE__*/ props => <Icon {...props}>
  <circle cx="12" cy="19" r="2"/><path d={"M12 3" + c + "v8" + d + "s2-.9 2-2V5" + b + "z"}/>
</Icon>
