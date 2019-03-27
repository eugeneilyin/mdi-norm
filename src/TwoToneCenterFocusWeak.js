import React from 'react'
import { Icon } from './Icon'
import { a, b, c, d, dn, dr } from './fragments'

export const TwoToneCenterFocusWeak = /*#__PURE__*/ props => <Icon {...props}>
  <path opacity=".3" d={"M12 10" + dn}/><path d={"M3 19" + d + "h4v-2H5v-4H3zM3 5v4h2V5h4V3H5" + c + "zm9 3" + dr + "m9-9" + b + "h-4v2h4v4h2zm-2 14h-4v2h4" + a + "v-4h-2z"}/>
</Icon>
