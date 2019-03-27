import React from 'react'
import { Icon } from './Icon'
import { cs, ku, bip } from './fragments'

export const TwoToneCheckCircle = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={cs + "m-2 13" + bip}/><path d={ku + "m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"}/>
</Icon>
