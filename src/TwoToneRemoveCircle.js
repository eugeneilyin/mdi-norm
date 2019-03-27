import React from 'react'
import { Icon } from './Icon'
import { i, y, cs } from './fragments'

export const TwoToneRemoveCircle = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={cs + "m5 9H7v-2h10z"}/><path d={"M7 11h10v2H7zm5-9" + i + y}/>
</Icon>
