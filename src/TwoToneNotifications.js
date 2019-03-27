import React from 'react'
import { Icon } from './Icon'
import { a, d, hc, bhl } from './fragments'

export const TwoToneNotifications = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={bhl}/><path d={"M12 22" + a + "h-4" + d + "zm6-6" + hc}/>
</Icon>
