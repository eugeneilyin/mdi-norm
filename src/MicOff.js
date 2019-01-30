import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMicOff } from './FilledMicOff'
import { OutlineMicOff } from './OutlineMicOff'
import { RoundMicOff } from './RoundMicOff'
import { SharpMicOff } from './SharpMicOff'
import { TwoToneMicOff } from './TwoToneMicOff'

export const MicOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMicOff, OutlineMicOff, RoundMicOff, SharpMicOff, TwoToneMicOff)
