import React from 'react'
import { Icon } from './Icon'
import { bow } from './fragments'

export const TwoTonePermDeviceInformation = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M7 20h10v1H7zM7 3h10v1H7z"}/><path d={bow + "m0-14H7V3h10z"}/>
</Icon>
