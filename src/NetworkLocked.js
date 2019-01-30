import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNetworkLocked } from './FilledNetworkLocked'
import { OutlineNetworkLocked } from './OutlineNetworkLocked'
import { RoundNetworkLocked } from './RoundNetworkLocked'
import { SharpNetworkLocked } from './SharpNetworkLocked'
import { TwoToneNetworkLocked } from './TwoToneNetworkLocked'

export const NetworkLocked = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNetworkLocked, OutlineNetworkLocked, RoundNetworkLocked, SharpNetworkLocked, TwoToneNetworkLocked)
