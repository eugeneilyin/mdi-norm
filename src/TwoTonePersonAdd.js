import React from 'react'
import { Icon } from './Icon'
import { co, wm, bfa } from './fragments'

export const TwoTonePersonAdd = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M15 16" + bfa}/><circle opacity=".3" cx="15" cy="8" r="2"/><path d={"M15 12" + co + "m0 8" + wm + "m-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"}/>
</Icon>
