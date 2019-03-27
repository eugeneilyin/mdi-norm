import React from 'react'
import { Icon } from './Icon'
import { pi, qi } from './fragments'

export const FilledPortrait = /*#__PURE__*/ props => <Icon {...props}>
  <path d={pi + qi}/>
</Icon>
