import React from 'react'
import { Icon } from './Icon'
import { b, c, fm, bgv } from './fragments'

export const TwoToneInsertChart = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M19 5H5v14h14zM9 17" + bgv}/><path d={"M3 5v14" + fm + "V5" + b + "H5" + c + "zm2 0h14v14H5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"}/>
</Icon>
