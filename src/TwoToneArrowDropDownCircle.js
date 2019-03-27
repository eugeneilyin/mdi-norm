import React from 'react'
import { Icon } from './Icon'
import { cs, ku } from './fragments'

export const TwoToneArrowDropDownCircle = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={cs + "m0 11l-4-4h8z"}/><path d={ku + "m0-5l4-4H8z"}/>
</Icon>
