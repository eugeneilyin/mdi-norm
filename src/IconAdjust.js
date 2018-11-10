import { createThemedIcon } from './utils/createThemedIcon'
import { IconAdjustFilled } from './IconAdjustFilled'
import { IconAdjustOutlined } from './IconAdjustOutlined'
import { IconAdjustRounded } from './IconAdjustRounded'
import { IconAdjustSharp } from './IconAdjustSharp'
import { IconAdjustTwoTone } from './IconAdjustTwoTone'

export const IconAdjust = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAdjustFilled, IconAdjustOutlined, IconAdjustRounded, IconAdjustSharp, IconAdjustTwoTone)
