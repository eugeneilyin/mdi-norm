import React from 'react'
import { Icon } from './Icon'
import { dz, ut } from './fragments'

export const TwoToneWebAsset = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M5 8h14v10H5z"/><path d={ut + dz + "m0 14H5V8h14z"}/>
</Icon>
