import React from 'react'
import { Icon } from './Icon'
import { a, c, mk } from './fragments'

export const TwoToneNote = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M15 6H4v12.01h16V11h-5z"/><path d={"M4 4" + c + "v12.01" + mk + "h16" + a + "v-8l-6-6zm16 14.01H4V6h11v5h5z"}/>
</Icon>
