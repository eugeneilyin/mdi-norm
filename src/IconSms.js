import { createThemedIcon } from './utils/createThemedIcon'
import { IconSmsFilled } from './IconSmsFilled'
import { IconSmsOutlined } from './IconSmsOutlined'
import { IconSmsRounded } from './IconSmsRounded'
import { IconSmsSharp } from './IconSmsSharp'
import { IconSmsTwoTone } from './IconSmsTwoTone'

export const IconSms = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSmsFilled, IconSmsOutlined, IconSmsRounded, IconSmsSharp, IconSmsTwoTone)
