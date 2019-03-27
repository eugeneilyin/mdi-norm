import React from 'react'
import { Icon } from './Icon'
import { bbo } from './fragments'

export const TwoToneScanner = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M5 14v4h14v-4zm3 3H6v-2h2zm10 0h-8v-2h8z"/><path d={bbo + "M19 18H5v-4h14zM6 15h2v2H6zm4 0h8v2h-8z"}/>
</Icon>
