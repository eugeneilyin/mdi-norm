import React from 'react'
import { Icon } from './Icon'
import { bjj, in_ } from './fragments'

export const TwoToneFilterNone = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M7 3h14v14H7z"/><path d={bjj + "M21 1" + in_}/>
</Icon>
