import React from 'react'
import { Icon } from './Icon'
import { dg, dn } from './fragments'

export const TwoToneGrain = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M18 8" + dg + "m0 8" + dg + "M6 8" + dn + "m8 0" + dn + "m-4 8" + dg + "m0-12" + dn + "m4 12" + dn + "m-8 4" + dg}/>
</Icon>
