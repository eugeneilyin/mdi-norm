import React from 'react'
import { Icon } from './Icon'
import { bkd, blc } from './fragments'

export const TwoToneAddBox = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={blc + "m2-8h4V7h2v4h4v2h-4v4h-2v-4H7z"}/><path d={bkd + "m-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"}/>
</Icon>
