import { createThemedIcon } from './utils/createThemedIcon'
import { IconFiberPinFilled } from './IconFiberPinFilled'
import { IconFiberPinOutlined } from './IconFiberPinOutlined'
import { IconFiberPinRounded } from './IconFiberPinRounded'
import { IconFiberPinSharp } from './IconFiberPinSharp'
import { IconFiberPinTwoTone } from './IconFiberPinTwoTone'

export const IconFiberPin = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFiberPinFilled, IconFiberPinOutlined, IconFiberPinRounded, IconFiberPinSharp, IconFiberPinTwoTone)
