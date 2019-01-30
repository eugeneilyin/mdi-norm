import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCallMerge } from './FilledCallMerge'
import { OutlineCallMerge } from './OutlineCallMerge'
import { RoundCallMerge } from './RoundCallMerge'
import { SharpCallMerge } from './SharpCallMerge'
import { TwoToneCallMerge } from './TwoToneCallMerge'

export const CallMerge = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCallMerge, OutlineCallMerge, RoundCallMerge, SharpCallMerge, TwoToneCallMerge)
