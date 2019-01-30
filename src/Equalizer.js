import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEqualizer } from './FilledEqualizer'
import { OutlineEqualizer } from './OutlineEqualizer'
import { RoundEqualizer } from './RoundEqualizer'
import { SharpEqualizer } from './SharpEqualizer'
import { TwoToneEqualizer } from './TwoToneEqualizer'

export const Equalizer = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEqualizer, OutlineEqualizer, RoundEqualizer, SharpEqualizer, TwoToneEqualizer)
