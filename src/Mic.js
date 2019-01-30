import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMic } from './FilledMic'
import { OutlineMic } from './OutlineMic'
import { RoundMic } from './RoundMic'
import { SharpMic } from './SharpMic'
import { TwoToneMic } from './TwoToneMic'

export const Mic = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMic, OutlineMic, RoundMic, SharpMic, TwoToneMic)
