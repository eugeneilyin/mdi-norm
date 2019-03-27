import React from 'react'
import { Icon } from './Icon'
import { ml } from './fragments'

export const TwoToneLabel = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M16 7H5v10h11l3.55-5z"/><path d={ml + "L22 12zM16 17H5V7h11l3.55 5z"}/>
</Icon>
