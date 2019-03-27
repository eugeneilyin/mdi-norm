import React from 'react'
import { Icon } from './Icon'
import { hw, bmz } from './fragments'

export const TwoToneBrightness7 = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={bmz}/><path d={hw}/><circle cx="12" cy="12" r="2"/>
</Icon>
