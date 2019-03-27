import React from 'react'
import { Icon } from './Icon'
import { fs, bep } from './fragments'

export const TwoToneSimCard = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M6 8.83V20h12V4h-7.17zM9 19H7v-2h2zm0-4H7v-4h2zm6-4h2v4h-2zm0 6" + fs + "m-4-6" + fs + "m0 4h2v4h-2z"}/><path d={bep}/>
</Icon>
