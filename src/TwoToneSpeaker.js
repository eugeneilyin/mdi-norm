import React from 'react'
import { Icon } from './Icon'
import { dd, mw, bdf, bnj } from './fragments'

export const TwoToneSpeaker = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M7 4v16h10V4zm5 1" + bnj + mw + "s.89-2 2-2zm0 14" + dd}/><path d={bdf}/>
</Icon>
