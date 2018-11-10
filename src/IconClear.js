import { createThemedIcon } from './utils/createThemedIcon'
import { IconClearFilled } from './IconClearFilled'
import { IconClearOutlined } from './IconClearOutlined'
import { IconClearRounded } from './IconClearRounded'
import { IconClearSharp } from './IconClearSharp'
import { IconClearTwoTone } from './IconClearTwoTone'

export const IconClear = /*#__PURE__*/ props =>
  createThemedIcon(props, IconClearFilled, IconClearOutlined, IconClearRounded, IconClearSharp, IconClearTwoTone)
