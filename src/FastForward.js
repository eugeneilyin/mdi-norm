import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFastForward } from './FilledFastForward'
import { OutlineFastForward } from './OutlineFastForward'
import { RoundFastForward } from './RoundFastForward'
import { SharpFastForward } from './SharpFastForward'
import { TwoToneFastForward } from './TwoToneFastForward'

export const FastForward = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFastForward, OutlineFastForward, RoundFastForward, SharpFastForward, TwoToneFastForward)
