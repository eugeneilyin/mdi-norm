import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhoneForwarded } from './FilledPhoneForwarded'
import { OutlinePhoneForwarded } from './OutlinePhoneForwarded'
import { RoundPhoneForwarded } from './RoundPhoneForwarded'
import { SharpPhoneForwarded } from './SharpPhoneForwarded'
import { TwoTonePhoneForwarded } from './TwoTonePhoneForwarded'

export const PhoneForwarded = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhoneForwarded, OutlinePhoneForwarded, RoundPhoneForwarded, SharpPhoneForwarded, TwoTonePhoneForwarded)
