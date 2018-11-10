import { createThemedIcon } from './utils/createThemedIcon'
import { IconFormatSizeFilled } from './IconFormatSizeFilled'
import { IconFormatSizeOutlined } from './IconFormatSizeOutlined'
import { IconFormatSizeRounded } from './IconFormatSizeRounded'
import { IconFormatSizeSharp } from './IconFormatSizeSharp'
import { IconFormatSizeTwoTone } from './IconFormatSizeTwoTone'

export const IconFormatSize = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFormatSizeFilled, IconFormatSizeOutlined, IconFormatSizeRounded, IconFormatSizeSharp, IconFormatSizeTwoTone)
