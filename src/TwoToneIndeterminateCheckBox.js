import React from 'react'
import { Icon } from './Icon'
import { qi, blc } from './fragments'

export const TwoToneIndeterminateCheckBox = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={blc + "m2-8h10v2H7z"}/><path d={qi + "M7 11h10v2H7z"}/>
</Icon>
