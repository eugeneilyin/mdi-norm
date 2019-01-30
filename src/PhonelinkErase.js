import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhonelinkErase } from './FilledPhonelinkErase'
import { OutlinePhonelinkErase } from './OutlinePhonelinkErase'
import { RoundPhonelinkErase } from './RoundPhonelinkErase'
import { SharpPhonelinkErase } from './SharpPhonelinkErase'
import { TwoTonePhonelinkErase } from './TwoTonePhonelinkErase'

export const PhonelinkErase = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhonelinkErase, OutlinePhonelinkErase, RoundPhonelinkErase, SharpPhonelinkErase, TwoTonePhonelinkErase)
