import React from 'react'
import { Icon } from './Icon'
import { ki, ro, wb, bbs } from './fragments'

export const RoundHorizontalSplit = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M4 19h16" + bbs + "H4" + ki + "zm0-8h16" + ro + "M3 6" + wb}/>
</Icon>
