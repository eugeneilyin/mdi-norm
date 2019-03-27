import React from 'react'
import { Icon } from './Icon'
import { kw } from './fragments'

export const TwoToneChatBubble = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d="M4 18l2-2h14V4H4z"/><path d={kw + "m0 14H6l-2 2V4h16z"}/>
</Icon>
