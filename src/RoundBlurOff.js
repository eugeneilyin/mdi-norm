import React from 'react'
import { Icon } from './Icon'
import { cg, dc, eg, et, tb, bgx } from './fragments'

export const RoundBlurOff = /*#__PURE__*/ props => <Icon {...props}>
  <circle cx="14" cy="6" r="1"/><path d={bgx}/><circle cx="18" cy="10" r="1"/><circle cx="18" cy="6" r="1"/><path d={"M21 10.5" + et}/><circle cx="10" cy="6" r="1"/><circle cx="18" cy="14" r="1"/><circle cx="6" cy="18" r="1"/><path d={"M14 20.5" + eg + "m7-7" + eg + "m-18 0" + eg}/><circle cx="10" cy="18" r="1"/><path d={"M3 9.5" + eg + "m7 11" + eg}/><circle cx="6" cy="14" r="1"/><path d={"M3.21 4.56" + dc + "l3.07 3.07" + tb + "l3.08 3.07c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.42L4.62 4.56" + cg + "z"}/>
</Icon>
