import React from 'react'
import { Icon } from './Icon'
import { eg, et, fg, tb, bgx } from './fragments'

export const OutlineBlurOff = /*#__PURE__*/ props => <Icon {...props}>
  <circle cx="14" cy="6" r="1"/><path d={bgx}/><circle cx="18" cy="10" r="1"/><circle cx="18" cy="6" r="1"/><path d={"M21 10.5" + et}/><circle cx="10" cy="6" r="1"/><circle cx="18" cy="14" r="1"/><circle cx="6" cy="18" r="1"/><path d={"M14 20.5" + eg + "m7-7" + eg + "m-18 0" + eg}/><circle cx="10" cy="18" r="1"/><path d={"M3 9.5" + eg + "m7 11" + eg}/><circle cx="6" cy="14" r="1"/><path d={"M2.5 5.27L6 8.77l.28.28" + tb + "l3.78 3.78h.01" + fg + "L3.91 3.86 2.5 5.27z"}/>
</Icon>
