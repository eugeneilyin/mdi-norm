import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMicNone } from './FilledMicNone'
import { OutlineMicNone } from './OutlineMicNone'
import { RoundMicNone } from './RoundMicNone'
import { SharpMicNone } from './SharpMicNone'
import { TwoToneMicNone } from './TwoToneMicNone'

export const MicNone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMicNone, OutlineMicNone, RoundMicNone, SharpMicNone, TwoToneMicNone)
