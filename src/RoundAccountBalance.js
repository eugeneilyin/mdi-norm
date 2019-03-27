import React from 'react'
import { Icon } from './Icon'
import { df, fp, ha, mp, rg, bbh } from './fragments'

export const RoundAccountBalance = /*#__PURE__*/ props => <Icon {...props}>
  <path d={"M4 11.5v4" + fp + "S7 16.33 7 15.5v-4" + df + "S4 10.67 4 11.5zm6 0v4" + rg + "v-4" + ha + "zM3.5 22h16" + bbh + "h-16" + mp + "S2.67 22 3.5 22zM16 11.5v4" + rg + "v-4" + ha + "zM10.57 1.49l-7.9 4.16c-.41.21-.67.64-.67 1.1C2 7.44 2.56 8 3.25 8h16.51C20.44 8 21 7.44 21 6.75c0-.46-.26-.89-.67-1.1l-7.9-4.16c-.58-.31-1.28-.31-1.86 0z"}/>
</Icon>
