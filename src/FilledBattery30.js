import React from 'react'
import { Icon } from './Icon'
import { by, iv, bol } from './fragments'

export const FilledBattery30 = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={bol + iv + "V15h10z"}/><path d={"M7 15v5.67" + by + "V15z"}/>
</Icon>
