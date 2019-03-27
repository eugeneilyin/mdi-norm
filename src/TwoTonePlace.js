import React from 'react'
import { Icon } from './Icon'
import { hm, js, bic } from './fragments'

export const TwoTonePlace = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M17 9" + js + "S7 6.24 7 9c0 2.85 2.92 7.21 5 9.88 2.12-2.69 5-7 5-9.88zM9.5 9c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 10.38 9.5 9z"}/><path d={"M19 9" + hm + "S5 5.13 5 9" + bic}/><circle cx="12" cy="9" r="2.5"/>
</Icon>
