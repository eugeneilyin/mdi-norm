import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNetworkCell } from './FilledNetworkCell'
import { OutlineNetworkCell } from './OutlineNetworkCell'
import { RoundNetworkCell } from './RoundNetworkCell'
import { SharpNetworkCell } from './SharpNetworkCell'
import { TwoToneNetworkCell } from './TwoToneNetworkCell'

export const NetworkCell = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNetworkCell, OutlineNetworkCell, RoundNetworkCell, SharpNetworkCell, TwoToneNetworkCell)
