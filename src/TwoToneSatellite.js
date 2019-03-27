import React from 'react'
import { Icon } from './Icon'
import { qi, blc } from './fragments'

export const TwoToneSatellite = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={blc + "M6 6h2.57c0 1.42-1.15 2.58-2.57 2.58zm0 4.29c2.37 0 4.28-1.93 4.28-4.29H12c0 3.31-2.68 6-6 6zm3 2.86l2.14 2.58 3-3.86L18 17H6z"}/><path d={qi + "M8.57 6H6v2.58c1.42 0 2.57-1.16 2.57-2.58zM12 6h-1.72c0 2.36-1.91 4.29-4.28 4.29V12c3.32 0 6-2.69 6-6zm2.14 5.86l-3 3.87L9 13.15 6 17h12z"}/>
</Icon>
