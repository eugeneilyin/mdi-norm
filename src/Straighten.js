import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStraighten } from './FilledStraighten'
import { OutlineStraighten } from './OutlineStraighten'
import { RoundStraighten } from './RoundStraighten'
import { SharpStraighten } from './SharpStraighten'
import { TwoToneStraighten } from './TwoToneStraighten'

export const Straighten = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStraighten, OutlineStraighten, RoundStraighten, SharpStraighten, TwoToneStraighten)
