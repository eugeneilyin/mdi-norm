import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFastRewind } from './FilledFastRewind'
import { OutlineFastRewind } from './OutlineFastRewind'
import { RoundFastRewind } from './RoundFastRewind'
import { SharpFastRewind } from './SharpFastRewind'
import { TwoToneFastRewind } from './TwoToneFastRewind'

export const FastRewind = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFastRewind, OutlineFastRewind, RoundFastRewind, SharpFastRewind, TwoToneFastRewind)
