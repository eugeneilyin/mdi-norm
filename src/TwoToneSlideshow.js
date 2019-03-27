import React from 'react'
import { Icon } from './Icon'
import { qi, blc } from './fragments'

export const TwoToneSlideshow = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={blc + "m5-11l5 4-5 4z"}/><path d={qi + "M10 8v8l5-4z"}/>
</Icon>
