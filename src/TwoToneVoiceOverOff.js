import React from 'react'
import { Icon } from './Icon'
import { hi, bfa } from './fragments'

export const TwoToneVoiceOverOff = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M9 17" + bfa + "M7 9c0 1.1.9 2 2 2 .22 0 .42-.04.62-.11L7.11 8.38c-.07.2-.11.4-.11.62z"}/><path d={hi}/>
</Icon>
