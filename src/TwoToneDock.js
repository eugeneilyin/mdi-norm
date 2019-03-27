import React from 'react'
import { Icon } from './Icon'
import { bd, kb } from './fragments'

export const TwoToneDock = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M8 5h8v10H8z"/><path d={"M8 21h8v2H8zm8-19.99L8 1" + bd + "h8" + kb + "M16 15H8V5h8z"}/>
</Icon>
