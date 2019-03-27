import React from 'react'
import { Icon } from './Icon'
import { td, vr } from './fragments'

export const TwoToneGridOn = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M10 10h4v4h-4zm0 6h4v4h-4zM4 4h4v4H4zm0 6h4v4H4zm0 6h4v4H4zM16 4h4v4h-4zm0 6h4v4h-4zm0 6h4v4h-4zM10 4h4v4h-4z"}/><path d={vr + td}/>
</Icon>
