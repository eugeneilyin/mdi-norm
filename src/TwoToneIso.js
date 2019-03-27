import React from 'react'
import { Icon } from './Icon'
import { dp, bmv } from './fragments'

export const TwoToneIso = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M19 19V5L5 19zm-2-3.5V17h-5v-1.5z"}/><path d={"M12 15.5h5V17h-5z" + dp + bmv}/>
</Icon>
