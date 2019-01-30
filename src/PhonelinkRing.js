import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhonelinkRing } from './FilledPhonelinkRing'
import { OutlinePhonelinkRing } from './OutlinePhonelinkRing'
import { RoundPhonelinkRing } from './RoundPhonelinkRing'
import { SharpPhonelinkRing } from './SharpPhonelinkRing'
import { TwoTonePhonelinkRing } from './TwoTonePhonelinkRing'

export const PhonelinkRing = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhonelinkRing, OutlinePhonelinkRing, RoundPhonelinkRing, SharpPhonelinkRing, TwoTonePhonelinkRing)
