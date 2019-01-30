import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVpnLock } from './FilledVpnLock'
import { OutlineVpnLock } from './OutlineVpnLock'
import { RoundVpnLock } from './RoundVpnLock'
import { SharpVpnLock } from './SharpVpnLock'
import { TwoToneVpnLock } from './TwoToneVpnLock'

export const VpnLock = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVpnLock, OutlineVpnLock, RoundVpnLock, SharpVpnLock, TwoToneVpnLock)
