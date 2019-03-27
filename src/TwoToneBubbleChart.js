import React from 'react'
import { Icon } from './Icon'
import { bc, co, hh } from './fragments'

export const TwoToneBubbleChart = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M16.5 12" + hh + "S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5z"}/><circle opacity=".3" cx="15.01" cy="18" r="1"/><circle opacity=".3" cx="7" cy="14" r="2"/><path d={"M7 18" + co + "m11.01 6c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-4 0" + bc + "s1 .45 1 1-.45 1-1 1-1-.45-1-1zm2.49-4c3.03 0 5.5-2.47 5.5-5.5S19.53 3 16.5 3 11 5.47 11 8.5s2.47 5.5 5.5 5.5zm0-9C18.43 5 20 6.57 20 8.5S18.43 12 16.5 12 13 10.43 13 8.5 14.57 5 16.5 5z"}/>
</Icon>
