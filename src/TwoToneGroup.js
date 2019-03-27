import React from 'react'
import { Icon } from './Icon'
import { jz } from './fragments'

export const TwoToneGroup = /*#__PURE__*/ props => <Icon {...props}>
  <circle opacity=".3" cx="9" cy="8.5" r="1.5"/><path opacity=".3" d={"M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z"}/><path d={jz}/>
</Icon>
