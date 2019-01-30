import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhoneLocked } from './FilledPhoneLocked'
import { OutlinePhoneLocked } from './OutlinePhoneLocked'
import { RoundPhoneLocked } from './RoundPhoneLocked'
import { SharpPhoneLocked } from './SharpPhoneLocked'
import { TwoTonePhoneLocked } from './TwoTonePhoneLocked'

export const PhoneLocked = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhoneLocked, OutlinePhoneLocked, RoundPhoneLocked, SharpPhoneLocked, TwoTonePhoneLocked)
