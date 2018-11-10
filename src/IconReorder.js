import { createThemedIcon } from './utils/createThemedIcon'
import { IconReorderFilled } from './IconReorderFilled'
import { IconReorderOutlined } from './IconReorderOutlined'
import { IconReorderRounded } from './IconReorderRounded'
import { IconReorderSharp } from './IconReorderSharp'
import { IconReorderTwoTone } from './IconReorderTwoTone'

export const IconReorder = /*#__PURE__*/ props =>
  createThemedIcon(props, IconReorderFilled, IconReorderOutlined, IconReorderRounded, IconReorderSharp, IconReorderTwoTone)
