import React from 'react'
import { Icon } from './Icon'
import { co, wm, bfa } from './fragments'

export const TwoTonePerson = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M12 16" + bfa}/><circle opacity=".3" cx="12" cy="8" r="2"/><path d={"M12 14" + wm + "m6-6" + co}/>
</Icon>
