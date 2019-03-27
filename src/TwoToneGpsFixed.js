import React from 'react'
import { Icon } from './Icon'
import { dr, mt } from './fragments'

export const TwoToneGpsFixed = /*#__PURE__*/ props => <Icon {...props}>
  <circle opacity=".3" cx="12" cy="12" r="2"/><path d={"M12 8" + dr + "m8.94-3" + mt}/>
</Icon>
