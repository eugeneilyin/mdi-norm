import React from 'react'
import { Icon } from './Icon'
import { bgm, bkq } from './fragments'

export const TwoToneInsertComment = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M4 16h14.83L20 17.17V4H4zM6 6h12v2H6zm0 3h12v2H6zm0 3h12v2H6z"}/><path d={bgm + "m0 2v13.17L18.83 16H4V4zM6 12" + bkq + "m0-3h12v2H6z"}/>
</Icon>
