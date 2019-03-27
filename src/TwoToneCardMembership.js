import React from 'react'
import { Icon } from './Icon'
import { bbf } from './fragments'

export const TwoToneCardMembership = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M4 4h16v6H4zm0 9h16v2H4z"}/><path d={bbf + "V4h16z"}/>
</Icon>
