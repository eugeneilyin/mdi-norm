import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCallEnd } from './FilledCallEnd'
import { OutlineCallEnd } from './OutlineCallEnd'
import { RoundCallEnd } from './RoundCallEnd'
import { SharpCallEnd } from './SharpCallEnd'
import { TwoToneCallEnd } from './TwoToneCallEnd'

export const CallEnd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCallEnd, OutlineCallEnd, RoundCallEnd, SharpCallEnd, TwoToneCallEnd)
