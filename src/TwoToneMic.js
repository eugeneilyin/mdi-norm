import React from 'react'
import { Icon } from './Icon'
import { f, j, bu, xf, bgk } from './fragments'

export const TwoToneMic = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M12 12" + f + "V5" + bu + "v6" + j + "z"}/><path d={bgk + "m6 6" + xf}/>
</Icon>
