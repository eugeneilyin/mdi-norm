import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCenterFocusWeak } from './FilledCenterFocusWeak'
import { OutlineCenterFocusWeak } from './OutlineCenterFocusWeak'
import { RoundCenterFocusWeak } from './RoundCenterFocusWeak'
import { SharpCenterFocusWeak } from './SharpCenterFocusWeak'
import { TwoToneCenterFocusWeak } from './TwoToneCenterFocusWeak'

export const CenterFocusWeak = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCenterFocusWeak, OutlineCenterFocusWeak, RoundCenterFocusWeak, SharpCenterFocusWeak, TwoToneCenterFocusWeak)
