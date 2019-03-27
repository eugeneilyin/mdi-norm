import React from 'react'
import { Icon } from './Icon'
import { dp, bcw } from './fragments'

export const TwoToneExposure = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M19 19V5L5 19zm-4.5-4.5v-2H16v2h2V16h-2v2h-1.5v-2h-2v-1.5z"}/><path d={dp + bcw}/>
</Icon>
