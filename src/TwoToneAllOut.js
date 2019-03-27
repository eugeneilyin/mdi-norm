import React from 'react'
import { Icon } from './Icon'
import { bib } from './fragments'

export const TwoToneAllOut = /*#__PURE__*/ props => <Icon {...props}>
  <circle opacity=".3" cx="12" cy="12" r="5"/><path d={bib}/>
</Icon>
