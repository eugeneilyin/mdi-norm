import React from 'react'
import { Icon } from './Icon'
import { cs, bgq, bjt } from './fragments'

export const TwoToneCancel = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={cs + "m5 11.59" + bjt}/><path d={bgq}/>
</Icon>
