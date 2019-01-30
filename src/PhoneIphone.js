import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhoneIphone } from './FilledPhoneIphone'
import { OutlinePhoneIphone } from './OutlinePhoneIphone'
import { RoundPhoneIphone } from './RoundPhoneIphone'
import { SharpPhoneIphone } from './SharpPhoneIphone'
import { TwoTonePhoneIphone } from './TwoTonePhoneIphone'

export const PhoneIphone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhoneIphone, OutlinePhoneIphone, RoundPhoneIphone, SharpPhoneIphone, TwoTonePhoneIphone)
