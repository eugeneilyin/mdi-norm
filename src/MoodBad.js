import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMoodBad } from './FilledMoodBad'
import { OutlineMoodBad } from './OutlineMoodBad'
import { RoundMoodBad } from './RoundMoodBad'
import { SharpMoodBad } from './SharpMoodBad'
import { TwoToneMoodBad } from './TwoToneMoodBad'

export const MoodBad = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMoodBad, OutlineMoodBad, RoundMoodBad, SharpMoodBad, TwoToneMoodBad)
