import React from 'react'
import { Icon } from './Icon'
import { ws, bhk } from './fragments'

export const OutlineLoyalty = /*#__PURE__*/ props => <Icon {...props}>
  <path d={bhk}/><circle cx="6.5" cy="6.5" r="1.5"/><path d={ws}/>
</Icon>
