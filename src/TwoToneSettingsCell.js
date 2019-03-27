import React from 'react'
import { Icon } from './Icon'
import { bdt } from './fragments'

export const TwoToneSettingsCell = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M8 17h8v1H8zM8 2h8v1H8z"}/><path d={bdt}/>
</Icon>
