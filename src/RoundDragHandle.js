import React from 'react'
import { Icon } from './Icon'
import { o, bf } from './fragments'

export const RoundDragHandle = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M19 9H5" + bf + "h14" + o + "zM5 15h14" + o + "H5" + bf + "z"}/>
</Icon>
