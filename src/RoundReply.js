import React from 'react'
import { Icon } from './Icon'
import { dc, hp, bmp } from './fragments'

export const RoundReply = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M10 9V7.41" + hp + "L3.7 11.29" + dc + "l4.59 4.59c.63.63 1.71.19 1.71-.7V14.9" + bmp}/>
</Icon>
