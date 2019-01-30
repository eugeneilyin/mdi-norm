import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhoneMissed } from './FilledPhoneMissed'
import { OutlinePhoneMissed } from './OutlinePhoneMissed'
import { RoundPhoneMissed } from './RoundPhoneMissed'
import { SharpPhoneMissed } from './SharpPhoneMissed'
import { TwoTonePhoneMissed } from './TwoTonePhoneMissed'

export const PhoneMissed = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhoneMissed, OutlinePhoneMissed, RoundPhoneMissed, SharpPhoneMissed, TwoTonePhoneMissed)
