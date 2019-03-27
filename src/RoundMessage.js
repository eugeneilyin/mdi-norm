import React from 'react'
import { Icon } from './Icon'
import { jl, bif } from './fragments'

export const RoundMessage = /*#__PURE__*/ props => <Icon {...props}>
  <path d={jl + "m-3 12" + bif + "m0-3" + bif + "m0-3" + bif}/>
</Icon>
