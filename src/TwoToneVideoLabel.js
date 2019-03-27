import React from 'react'
import { Icon } from './Icon'
import { cf } from './fragments'

export const TwoToneVideoLabel = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M3 5h18v11H3z"/><path d={cf + "m0 13H3V5h18z"}/>
</Icon>
