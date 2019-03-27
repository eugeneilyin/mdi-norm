import React from 'react'
import { Icon } from './Icon'
import { me, bgc } from './fragments'

export const TwoToneMemory = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M7 17h10V7H7zm2-8h6v6H9z"/><path d={"M21 11" + bgc + "m-2-8H9v6h6zm-2 4" + me}/>
</Icon>
