import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCallMissed } from './FilledCallMissed'
import { OutlineCallMissed } from './OutlineCallMissed'
import { RoundCallMissed } from './RoundCallMissed'
import { SharpCallMissed } from './SharpCallMissed'
import { TwoToneCallMissed } from './TwoToneCallMissed'

export const CallMissed = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCallMissed, OutlineCallMissed, RoundCallMissed, SharpCallMissed, TwoToneCallMissed)
