import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhoneCallback } from './FilledPhoneCallback'
import { OutlinePhoneCallback } from './OutlinePhoneCallback'
import { RoundPhoneCallback } from './RoundPhoneCallback'
import { SharpPhoneCallback } from './SharpPhoneCallback'
import { TwoTonePhoneCallback } from './TwoTonePhoneCallback'

export const PhoneCallback = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhoneCallback, OutlinePhoneCallback, RoundPhoneCallback, SharpPhoneCallback, TwoTonePhoneCallback)
