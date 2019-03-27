import React from 'react'
import { Icon } from './Icon'
import { bld } from './fragments'

export const TwoToneEvent = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M5 8h14V6H5z"/><path d={"M19 4" + bld + "m-7 5h5v5h-5z"}/>
</Icon>
