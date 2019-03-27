import React from 'react'
import { Icon } from './Icon'
import { k, bc, dk, dp } from './fragments'

export const RoundExplicit = /*#__PURE__*/ props => <Icon {...props}>
  <path d={dp + "m-5 6h-3v2h3" + dk + "h-3v2h3" + dk + "h-4" + k + "V8" + bc + "h4" + dk + "z"}/>
</Icon>
