import { createThemedIcon } from './utils/createThemedIcon'
import { IconFormatBoldFilled } from './IconFormatBoldFilled'
import { IconFormatBoldOutlined } from './IconFormatBoldOutlined'
import { IconFormatBoldRounded } from './IconFormatBoldRounded'
import { IconFormatBoldSharp } from './IconFormatBoldSharp'
import { IconFormatBoldTwoTone } from './IconFormatBoldTwoTone'

export const IconFormatBold = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFormatBoldFilled, IconFormatBoldOutlined, IconFormatBoldRounded, IconFormatBoldSharp, IconFormatBoldTwoTone)
