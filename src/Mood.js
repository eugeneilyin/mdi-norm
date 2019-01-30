import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMood } from './FilledMood'
import { OutlineMood } from './OutlineMood'
import { RoundMood } from './RoundMood'
import { SharpMood } from './SharpMood'
import { TwoToneMood } from './TwoToneMood'

export const Mood = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMood, OutlineMood, RoundMood, SharpMood, TwoToneMood)
