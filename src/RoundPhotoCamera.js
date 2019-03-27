import React from 'react'
import { Icon } from './Icon'
import { bv, na, qp } from './fragments'

export const RoundPhotoCamera = /*#__PURE__*/ props => <Icon {...props}>
  <circle cx="12" cy="12" r="3"/><path d={"M20 4" + qp + "L7.17 4" + na + "m-8 13" + bv}/>
</Icon>
