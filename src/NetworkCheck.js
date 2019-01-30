import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNetworkCheck } from './FilledNetworkCheck'
import { OutlineNetworkCheck } from './OutlineNetworkCheck'
import { RoundNetworkCheck } from './RoundNetworkCheck'
import { SharpNetworkCheck } from './SharpNetworkCheck'
import { TwoToneNetworkCheck } from './TwoToneNetworkCheck'

export const NetworkCheck = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNetworkCheck, OutlineNetworkCheck, RoundNetworkCheck, SharpNetworkCheck, TwoToneNetworkCheck)
