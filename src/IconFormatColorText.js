import { createThemedIcon } from './utils/createThemedIcon'
import { IconFormatColorTextFilled } from './IconFormatColorTextFilled'
import { IconFormatColorTextOutlined } from './IconFormatColorTextOutlined'
import { IconFormatColorTextRounded } from './IconFormatColorTextRounded'
import { IconFormatColorTextSharp } from './IconFormatColorTextSharp'
import { IconFormatColorTextTwoTone } from './IconFormatColorTextTwoTone'

export const IconFormatColorText = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFormatColorTextFilled, IconFormatColorTextOutlined, IconFormatColorTextRounded, IconFormatColorTextSharp, IconFormatColorTextTwoTone)
