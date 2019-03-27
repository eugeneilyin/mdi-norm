import React from 'react'
import { Icon } from './Icon'
import { cr, dd, mf, bme } from './fragments'

export const FilledSpeakerGroup = /*#__PURE__*/ props => <Icon {...props}>
  <path d={mf + "M14 3" + bme + "m0 13.5" + dd}/><circle cx="14" cy="12.5" r="2.5"/><path d={"M6 5H4v16" + cr + "h10v-2H6z"}/>
</Icon>
