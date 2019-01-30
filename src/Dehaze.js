import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDehaze } from './FilledDehaze'
import { OutlineDehaze } from './OutlineDehaze'
import { RoundDehaze } from './RoundDehaze'
import { SharpDehaze } from './SharpDehaze'
import { TwoToneDehaze } from './TwoToneDehaze'

export const Dehaze = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDehaze, OutlineDehaze, RoundDehaze, SharpDehaze, TwoToneDehaze)
