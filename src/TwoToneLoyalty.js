import React from 'react'
import { Icon } from './Icon'
import { ws, bhk, bnh } from './fragments'

export const TwoToneLoyalty = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={bnh + "m6.5 3.7l.6-.6c.37-.37.89-.6 1.45-.6 1.13 0 2.05.92 2.05 2.05 0 .57-.23 1.08-.6 1.45L13 17.5 9.5 14c-.37-.38-.6-.89-.6-1.45 0-1.13.92-2.05 2.05-2.05.57 0 1.08.23 1.45.61z"}/><path d={bhk}/><circle cx="6.5" cy="6.5" r="1.5"/><path d={ws}/>
</Icon>
