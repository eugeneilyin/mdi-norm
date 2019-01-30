import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCallSplit } from './FilledCallSplit'
import { OutlineCallSplit } from './OutlineCallSplit'
import { RoundCallSplit } from './RoundCallSplit'
import { SharpCallSplit } from './SharpCallSplit'
import { TwoToneCallSplit } from './TwoToneCallSplit'

export const CallSplit = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCallSplit, OutlineCallSplit, RoundCallSplit, SharpCallSplit, TwoToneCallSplit)
