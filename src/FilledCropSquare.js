import React from 'react'
import { Icon } from './Icon'
import { cy, sq } from './fragments'

export const FilledCropSquare = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M18 4H6" + cy + "h12" + sq + "zm0 14H6V6h12z"}/>
</Icon>
