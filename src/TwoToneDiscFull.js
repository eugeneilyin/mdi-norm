import React from 'react'
import { Icon } from './Icon'
import { bp, dm, dn, ec, fs, fw } from './fragments'

export const TwoToneDiscFull = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M10 6" + fw + "m0 8" + bp}/><path d={"M20 14" + fs + "M10 4" + ec + "m0 14" + dm + "M20 7h2v5h-2zm-10 3" + dn}/>
</Icon>
