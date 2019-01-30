import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhonelinkOff } from './FilledPhonelinkOff'
import { OutlinePhonelinkOff } from './OutlinePhonelinkOff'
import { RoundPhonelinkOff } from './RoundPhonelinkOff'
import { SharpPhonelinkOff } from './SharpPhonelinkOff'
import { TwoTonePhonelinkOff } from './TwoTonePhonelinkOff'

export const PhonelinkOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhonelinkOff, OutlinePhonelinkOff, RoundPhonelinkOff, SharpPhonelinkOff, TwoTonePhonelinkOff)
