import React from 'react'
import { Icon } from './Icon'
import { cx } from './fragments'

export const TwoTonePayment = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M4 6h16v2H4zm0 6h16v6H4z"/><path d={"M20 4" + cx + "m0 14H4v-6h16zm0-10H4V6h16z"}/>
</Icon>
