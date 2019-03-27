import React from 'react'
import { Icon } from './Icon'
import { ba, eg, et, kt } from './fragments'

export const TwoToneBlurCircular = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M14 7.5" + et}/><circle cx="14" cy="10" r="1"/><circle cx="14" cy="14" r="1"/><path d={"M10 16.5" + eg}/><circle cx="10" cy="10" r="1"/><path d={"M7 13.5" + eg + kt + "m0 18" + ba + "M7 9.5" + eg}/><circle cx="10" cy="14" r="1"/><path d={"M10 7.5" + et + "m4 9" + eg + "m3-7" + eg + "m0 4" + eg}/>
</Icon>
