import React from 'react'
import { Icon } from './Icon'
import { b, bv, gx } from './fragments'

export const FilledPhotoCamera = /*#__PURE__*/ props => <Icon {...props}>
  <circle cx="12" cy="12" r="3.2"/><path d={"M9 2L7.17 4" + gx + "V6" + b + "h-3.17L15 2zm3 15" + bv}/>
</Icon>
