import React from 'react'
import { Icon } from './Icon'
import { pq, bpc } from './fragments'

export const TwoToneRouter = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M15 15H5v4h14v-4zm-7 3" + bpc}/><path d={pq}/>
</Icon>
