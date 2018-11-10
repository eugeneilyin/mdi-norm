import { createThemedIcon } from './utils/createThemedIcon'
import { IconFormatUnderlinedFilled } from './IconFormatUnderlinedFilled'
import { IconFormatUnderlinedOutlined } from './IconFormatUnderlinedOutlined'
import { IconFormatUnderlinedRounded } from './IconFormatUnderlinedRounded'
import { IconFormatUnderlinedSharp } from './IconFormatUnderlinedSharp'
import { IconFormatUnderlinedTwoTone } from './IconFormatUnderlinedTwoTone'

export const IconFormatUnderlined = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFormatUnderlinedFilled, IconFormatUnderlinedOutlined, IconFormatUnderlinedRounded, IconFormatUnderlinedSharp, IconFormatUnderlinedTwoTone)
