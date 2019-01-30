import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCallMade } from './FilledCallMade'
import { OutlineCallMade } from './OutlineCallMade'
import { RoundCallMade } from './RoundCallMade'
import { SharpCallMade } from './SharpCallMade'
import { TwoToneCallMade } from './TwoToneCallMade'

export const CallMade = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCallMade, OutlineCallMade, RoundCallMade, SharpCallMade, TwoToneCallMade)
