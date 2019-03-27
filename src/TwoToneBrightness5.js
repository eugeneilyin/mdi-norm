import React from 'react'
import { Icon } from './Icon'
import { hw, bmz } from './fragments'

export const TwoToneBrightness5 = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={bmz}/><path d={hw}/>
</Icon>
