import { createThemedIcon } from './utils/createThemedIcon'
import { IconBrushFilled } from './IconBrushFilled'
import { IconBrushOutlined } from './IconBrushOutlined'
import { IconBrushRounded } from './IconBrushRounded'
import { IconBrushSharp } from './IconBrushSharp'
import { IconBrushTwoTone } from './IconBrushTwoTone'

export const IconBrush = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBrushFilled, IconBrushOutlined, IconBrushRounded, IconBrushSharp, IconBrushTwoTone)
