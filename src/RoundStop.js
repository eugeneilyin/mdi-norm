import React from 'react'
import { Icon } from './Icon'
import { bo, cm, ez, nr } from './fragments'

export const RoundStop = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M8 6h8" + cm + "v8" + nr + "H8" + bo + "V8" + ez + "z"}/>
</Icon>
