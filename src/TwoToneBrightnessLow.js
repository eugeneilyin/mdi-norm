import React from 'react'
import { Icon } from './Icon'
import { r, dd, dm, er, fw } from './fragments'

export const TwoToneBrightnessLow = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={er + "M12 18" + dm}/><path d={r + "M12 6" + fw + "m0 10" + dd}/>
</Icon>
