import React from 'react'
import { Icon } from './Icon'
import { if_ } from './fragments'

export const FilledMouse = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15" + if_ + "v-4H4zm7-13.93C7.05 1.56 4 4.92 4 9h7z"}/>
</Icon>
