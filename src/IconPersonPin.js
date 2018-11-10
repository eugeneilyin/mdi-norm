import { createThemedIcon } from './utils/createThemedIcon'
import { IconPersonPinFilled } from './IconPersonPinFilled'
import { IconPersonPinOutlined } from './IconPersonPinOutlined'
import { IconPersonPinRounded } from './IconPersonPinRounded'
import { IconPersonPinSharp } from './IconPersonPinSharp'
import { IconPersonPinTwoTone } from './IconPersonPinTwoTone'

export const IconPersonPin = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPersonPinFilled, IconPersonPinOutlined, IconPersonPinRounded, IconPersonPinSharp, IconPersonPinTwoTone)
