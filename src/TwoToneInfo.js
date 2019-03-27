import React from 'react'
import { Icon } from './Icon'
import { i, y, cs, fs } from './fragments'

export const TwoToneInfo = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={cs + "m1 13h-2v-6h2zm0-8h-2V7h2z"}/><path d={"M11 7" + fs + "m0 4h2v6h-2zm1-9" + i + y}/>
</Icon>
