import { createThemedIcon } from './utils/createThemedIcon'
import { IconMemoryFilled } from './IconMemoryFilled'
import { IconMemoryOutlined } from './IconMemoryOutlined'
import { IconMemoryRounded } from './IconMemoryRounded'
import { IconMemorySharp } from './IconMemorySharp'
import { IconMemoryTwoTone } from './IconMemoryTwoTone'

export const IconMemory = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMemoryFilled, IconMemoryOutlined, IconMemoryRounded, IconMemorySharp, IconMemoryTwoTone)
