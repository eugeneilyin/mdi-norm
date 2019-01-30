import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFastfood } from './FilledFastfood'
import { OutlineFastfood } from './OutlineFastfood'
import { RoundFastfood } from './RoundFastfood'
import { SharpFastfood } from './SharpFastfood'
import { TwoToneFastfood } from './TwoToneFastfood'

export const Fastfood = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFastfood, OutlineFastfood, RoundFastfood, SharpFastfood, TwoToneFastfood)
