import { createThemedIcon } from './utils/createThemedIcon'
import { IconPhoneFilled } from './IconPhoneFilled'
import { IconPhoneOutlined } from './IconPhoneOutlined'
import { IconPhoneRounded } from './IconPhoneRounded'
import { IconPhoneSharp } from './IconPhoneSharp'
import { IconPhoneTwoTone } from './IconPhoneTwoTone'

export const IconPhone = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPhoneFilled, IconPhoneOutlined, IconPhoneRounded, IconPhoneSharp, IconPhoneTwoTone)
