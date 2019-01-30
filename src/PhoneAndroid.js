import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhoneAndroid } from './FilledPhoneAndroid'
import { OutlinePhoneAndroid } from './OutlinePhoneAndroid'
import { RoundPhoneAndroid } from './RoundPhoneAndroid'
import { SharpPhoneAndroid } from './SharpPhoneAndroid'
import { TwoTonePhoneAndroid } from './TwoTonePhoneAndroid'

export const PhoneAndroid = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhoneAndroid, OutlinePhoneAndroid, RoundPhoneAndroid, SharpPhoneAndroid, TwoTonePhoneAndroid)
