import React from 'react'
import { Icon } from './Icon'
import { bft } from './fragments'

export const TwoToneFolderOpen = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M4 8h16v10H4z"}/><path d={bft + "V8h16z"}/>
</Icon>
