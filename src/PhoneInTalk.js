import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhoneInTalk } from './FilledPhoneInTalk'
import { OutlinePhoneInTalk } from './OutlinePhoneInTalk'
import { RoundPhoneInTalk } from './RoundPhoneInTalk'
import { SharpPhoneInTalk } from './SharpPhoneInTalk'
import { TwoTonePhoneInTalk } from './TwoTonePhoneInTalk'

export const PhoneInTalk = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhoneInTalk, OutlinePhoneInTalk, RoundPhoneInTalk, SharpPhoneInTalk, TwoTonePhoneInTalk)
