import { createThemedIcon } from './utils/createThemedIcon'
import { IconShortTextFilled } from './IconShortTextFilled'
import { IconShortTextOutlined } from './IconShortTextOutlined'
import { IconShortTextRounded } from './IconShortTextRounded'
import { IconShortTextSharp } from './IconShortTextSharp'
import { IconShortTextTwoTone } from './IconShortTextTwoTone'

export const IconShortText = /*#__PURE__*/ props =>
  createThemedIcon(props, IconShortTextFilled, IconShortTextOutlined, IconShortTextRounded, IconShortTextSharp, IconShortTextTwoTone)
