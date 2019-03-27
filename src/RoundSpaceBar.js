import React from 'react'
import { Icon } from './Icon'
import { f, j, bu } from './fragments'

export const RoundSpaceBar = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M18 10v3H6v-3" + bu + "v4" + j + "h14" + f + "v-4" + bu + "z"}/>
</Icon>
