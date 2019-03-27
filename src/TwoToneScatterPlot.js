import React from 'react'
import { Icon } from './Icon'
import { bp, dr, lq } from './fragments'

export const TwoToneScatterPlot = /*#__PURE__*/ props => <Icon {...props}>
  <circle opacity=".3" cx="11" cy="6" r="2"/><circle opacity=".3" cx="16.6" cy="17.6" r="2"/><circle opacity=".3" cx="7" cy="14" r="2"/><path d={"M7 10" + dr + "m8-10" + lq + "S7 3.79 7 6s1.79 4 4 4 4-1.79 4-4zm-4 2" + bp + "m5.6 5.6" + dr}/>
</Icon>
