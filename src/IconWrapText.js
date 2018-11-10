import { createThemedIcon } from './utils/createThemedIcon'
import { IconWrapTextFilled } from './IconWrapTextFilled'
import { IconWrapTextOutlined } from './IconWrapTextOutlined'
import { IconWrapTextRounded } from './IconWrapTextRounded'
import { IconWrapTextSharp } from './IconWrapTextSharp'
import { IconWrapTextTwoTone } from './IconWrapTextTwoTone'

export const IconWrapText = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWrapTextFilled, IconWrapTextOutlined, IconWrapTextRounded, IconWrapTextSharp, IconWrapTextTwoTone)
