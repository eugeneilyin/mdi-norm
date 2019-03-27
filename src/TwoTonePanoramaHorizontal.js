import React from 'react'
import { Icon } from './Icon'
import { ps, bmi } from './fragments'

export const TwoTonePanoramaHorizontal = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M4 6.54v10.91c2.6-.77 5.28-1.16 8-1.16s5.4.39 8 1.16V6.54c-2.6.78-5.28 1.17-8 1.16-2.72 0-5.4-.39-8-1.16z"}/><path d={ps + "M20 17.45" + bmi + "z"}/>
</Icon>
