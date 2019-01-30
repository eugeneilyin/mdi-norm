import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhonePaused } from './FilledPhonePaused'
import { OutlinePhonePaused } from './OutlinePhonePaused'
import { RoundPhonePaused } from './RoundPhonePaused'
import { SharpPhonePaused } from './SharpPhonePaused'
import { TwoTonePhonePaused } from './TwoTonePhonePaused'

export const PhonePaused = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhonePaused, OutlinePhonePaused, RoundPhonePaused, SharpPhonePaused, TwoTonePhonePaused)
