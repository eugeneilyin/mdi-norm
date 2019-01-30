import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSurroundSound } from './FilledSurroundSound'
import { OutlineSurroundSound } from './OutlineSurroundSound'
import { RoundSurroundSound } from './RoundSurroundSound'
import { SharpSurroundSound } from './SharpSurroundSound'
import { TwoToneSurroundSound } from './TwoToneSurroundSound'

export const SurroundSound = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSurroundSound, OutlineSurroundSound, RoundSurroundSound, SharpSurroundSound, TwoToneSurroundSound)
