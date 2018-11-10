import { createThemedIcon } from './utils/createThemedIcon'
import { IconFormatClearFilled } from './IconFormatClearFilled'
import { IconFormatClearOutlined } from './IconFormatClearOutlined'
import { IconFormatClearRounded } from './IconFormatClearRounded'
import { IconFormatClearSharp } from './IconFormatClearSharp'
import { IconFormatClearTwoTone } from './IconFormatClearTwoTone'

export const IconFormatClear = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFormatClearFilled, IconFormatClearOutlined, IconFormatClearRounded, IconFormatClearSharp, IconFormatClearTwoTone)
