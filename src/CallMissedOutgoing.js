import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCallMissedOutgoing } from './FilledCallMissedOutgoing'
import { OutlineCallMissedOutgoing } from './OutlineCallMissedOutgoing'
import { RoundCallMissedOutgoing } from './RoundCallMissedOutgoing'
import { SharpCallMissedOutgoing } from './SharpCallMissedOutgoing'
import { TwoToneCallMissedOutgoing } from './TwoToneCallMissedOutgoing'

export const CallMissedOutgoing = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCallMissedOutgoing, OutlineCallMissedOutgoing, RoundCallMissedOutgoing, SharpCallMissedOutgoing, TwoToneCallMissedOutgoing)
