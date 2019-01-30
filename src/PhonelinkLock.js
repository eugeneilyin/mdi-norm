import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhonelinkLock } from './FilledPhonelinkLock'
import { OutlinePhonelinkLock } from './OutlinePhonelinkLock'
import { RoundPhonelinkLock } from './RoundPhonelinkLock'
import { SharpPhonelinkLock } from './SharpPhonelinkLock'
import { TwoTonePhonelinkLock } from './TwoTonePhonelinkLock'

export const PhonelinkLock = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhonelinkLock, OutlinePhonelinkLock, RoundPhonelinkLock, SharpPhonelinkLock, TwoTonePhonelinkLock)
