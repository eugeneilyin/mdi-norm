import React from 'react'
import { Icon } from './Icon'
import { cn, bit } from './fragments'

export const TwoToneLockOpen = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M6 20h12V10H6zm6-7" + cn + "z"}/><path d={bit}/>
</Icon>
