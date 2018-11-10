import { createThemedIcon } from './utils/createThemedIcon'
import { IconDragIndicatorFilled } from './IconDragIndicatorFilled'
import { IconDragIndicatorOutlined } from './IconDragIndicatorOutlined'
import { IconDragIndicatorRounded } from './IconDragIndicatorRounded'
import { IconDragIndicatorSharp } from './IconDragIndicatorSharp'
import { IconDragIndicatorTwoTone } from './IconDragIndicatorTwoTone'

export const IconDragIndicator = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDragIndicatorFilled, IconDragIndicatorOutlined, IconDragIndicatorRounded, IconDragIndicatorSharp, IconDragIndicatorTwoTone)
