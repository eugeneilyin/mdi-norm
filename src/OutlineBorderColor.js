import React from 'react'
import { Icon } from './Icon'
import { bhg } from './fragments'

export const OutlineBorderColor = /*#__PURE__*/ props => <Icon {...props}>
  <path d={bhg}/><path opacity=".36" d={"M0 20h24v4H0z"}/>
</Icon>
