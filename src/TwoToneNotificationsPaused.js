import React from 'react'
import { Icon } from './Icon'
import { bhl, bpq } from './fragments'

export const TwoToneNotificationsPaused = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={bhl + "m2.5 3.3l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5z"}/><path d={bpq}/>
</Icon>
