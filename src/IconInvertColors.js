import { createThemedIcon } from './utils/createThemedIcon'
import { IconInvertColorsFilled } from './IconInvertColorsFilled'
import { IconInvertColorsOutlined } from './IconInvertColorsOutlined'
import { IconInvertColorsRounded } from './IconInvertColorsRounded'
import { IconInvertColorsSharp } from './IconInvertColorsSharp'
import { IconInvertColorsTwoTone } from './IconInvertColorsTwoTone'

export const IconInvertColors = /*#__PURE__*/ props =>
  createThemedIcon(props, IconInvertColorsFilled, IconInvertColorsOutlined, IconInvertColorsRounded, IconInvertColorsSharp, IconInvertColorsTwoTone)
