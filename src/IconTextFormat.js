import { createThemedIcon } from './utils/createThemedIcon'
import { IconTextFormatFilled } from './IconTextFormatFilled'
import { IconTextFormatOutlined } from './IconTextFormatOutlined'
import { IconTextFormatRounded } from './IconTextFormatRounded'
import { IconTextFormatSharp } from './IconTextFormatSharp'
import { IconTextFormatTwoTone } from './IconTextFormatTwoTone'

export const IconTextFormat = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTextFormatFilled, IconTextFormatOutlined, IconTextFormatRounded, IconTextFormatSharp, IconTextFormatTwoTone)
