import React from 'react'
import { Icon } from './Icon'
import { bp, cs, ku } from './fragments'

export const TwoToneGroupWork = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={cs + "M8 16" + bp + "m4-6" + bp + "m4 6" + bp}/><path d={ku}/><circle cx="8" cy="14" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="16" cy="14" r="2"/>
</Icon>
