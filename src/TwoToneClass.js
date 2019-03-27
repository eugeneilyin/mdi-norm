import React from 'react'
import { Icon } from './Icon'
import { zp } from './fragments'

export const TwoToneClass = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M13 13l-3-2.25L7 13V4H6v16h12V4h-5z"}/><path d={zp}/>
</Icon>
