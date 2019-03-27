import React from 'react'
import { Icon } from './Icon'
import { cr, jr, bcb } from './fragments'

export const FilledFlipToBack = /*#__PURE__*/ props => <Icon {...props}>
  <path d={bcb + "M5 7H3v12" + cr + "h12v-2H5zm10-2h2V3h-2zm0 12" + jr}/>
</Icon>
