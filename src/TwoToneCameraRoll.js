import React from 'react'
import { Icon } from './Icon'
import { fs, bal } from './fragments'

export const TwoToneCameraRoll = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M12 5H9V3H7v2H4v15h8v-2h8V7h-8zm-1 12H9v-2h2zm0-7H9V8h2zm6-2" + fs + "m0 7" + fs + "m-4-7" + fs + "m0 7" + fs}/><path d={bal}/>
</Icon>
