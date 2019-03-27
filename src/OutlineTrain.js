import React from 'react'
import { Icon } from './Icon'
import { ts } from './fragments'

export const OutlineTrain = /*#__PURE__*/ props => <Icon {...props}>
  <circle cx="8.5" cy="14.5" r="1.5"/><circle cx="15.5" cy="14.5" r="1.5"/><path d={ts}/>
</Icon>
