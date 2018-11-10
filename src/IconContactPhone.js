import { createThemedIcon } from './utils/createThemedIcon'
import { IconContactPhoneFilled } from './IconContactPhoneFilled'
import { IconContactPhoneOutlined } from './IconContactPhoneOutlined'
import { IconContactPhoneRounded } from './IconContactPhoneRounded'
import { IconContactPhoneSharp } from './IconContactPhoneSharp'
import { IconContactPhoneTwoTone } from './IconContactPhoneTwoTone'

export const IconContactPhone = /*#__PURE__*/ props =>
  createThemedIcon(props, IconContactPhoneFilled, IconContactPhoneOutlined, IconContactPhoneRounded, IconContactPhoneSharp, IconContactPhoneTwoTone)
