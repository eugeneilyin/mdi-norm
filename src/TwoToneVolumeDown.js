import React from 'react'
import { Icon } from './Icon'
import { bfs } from './fragments'

export const TwoToneVolumeDown = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M7 13h2.83L12 15.17V8.83L9.83 11H7z"}/><path d={bfs}/>
</Icon>
