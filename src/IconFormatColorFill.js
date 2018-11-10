import { createThemedIcon } from './utils/createThemedIcon'
import { IconFormatColorFillFilled } from './IconFormatColorFillFilled'
import { IconFormatColorFillOutlined } from './IconFormatColorFillOutlined'
import { IconFormatColorFillRounded } from './IconFormatColorFillRounded'
import { IconFormatColorFillSharp } from './IconFormatColorFillSharp'
import { IconFormatColorFillTwoTone } from './IconFormatColorFillTwoTone'

export const IconFormatColorFill = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFormatColorFillFilled, IconFormatColorFillOutlined, IconFormatColorFillRounded, IconFormatColorFillSharp, IconFormatColorFillTwoTone)
