import React from 'react'
import { Icon } from './Icon'
import { bb, ec, fs, zt } from './fragments'

export const TwoToneError = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M12 4" + ec + "m1 13" + zt + "V7h2z"}/><path d={"M11.99 2" + bb + "m-1-5" + fs + "m0-8h2v6h-2z"}/>
</Icon>
