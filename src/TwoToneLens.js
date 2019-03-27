import React from 'react'
import { Icon } from './Icon'
import { cs, ku } from './fragments'

export const TwoToneLens = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={cs}/><path d={ku}/>
</Icon>
