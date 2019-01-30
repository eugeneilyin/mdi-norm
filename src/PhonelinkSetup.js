import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhonelinkSetup } from './FilledPhonelinkSetup'
import { OutlinePhonelinkSetup } from './OutlinePhonelinkSetup'
import { RoundPhonelinkSetup } from './RoundPhonelinkSetup'
import { SharpPhonelinkSetup } from './SharpPhonelinkSetup'
import { TwoTonePhonelinkSetup } from './TwoTonePhonelinkSetup'

export const PhonelinkSetup = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhonelinkSetup, OutlinePhonelinkSetup, RoundPhonelinkSetup, SharpPhonelinkSetup, TwoTonePhonelinkSetup)
