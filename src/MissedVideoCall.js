import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMissedVideoCall } from './FilledMissedVideoCall'
import { OutlineMissedVideoCall } from './OutlineMissedVideoCall'
import { RoundMissedVideoCall } from './RoundMissedVideoCall'
import { SharpMissedVideoCall } from './SharpMissedVideoCall'
import { TwoToneMissedVideoCall } from './TwoToneMissedVideoCall'

export const MissedVideoCall = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMissedVideoCall, OutlineMissedVideoCall, RoundMissedVideoCall, SharpMissedVideoCall, TwoToneMissedVideoCall)
