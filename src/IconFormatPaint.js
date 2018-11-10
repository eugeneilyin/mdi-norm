import { createThemedIcon } from './utils/createThemedIcon'
import { IconFormatPaintFilled } from './IconFormatPaintFilled'
import { IconFormatPaintOutlined } from './IconFormatPaintOutlined'
import { IconFormatPaintRounded } from './IconFormatPaintRounded'
import { IconFormatPaintSharp } from './IconFormatPaintSharp'
import { IconFormatPaintTwoTone } from './IconFormatPaintTwoTone'

export const IconFormatPaint = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFormatPaintFilled, IconFormatPaintOutlined, IconFormatPaintRounded, IconFormatPaintSharp, IconFormatPaintTwoTone)
