import { createThemedIcon } from './utils/createThemedIcon'
import { IconEditFilled } from './IconEditFilled'
import { IconEditOutlined } from './IconEditOutlined'
import { IconEditRounded } from './IconEditRounded'
import { IconEditSharp } from './IconEditSharp'
import { IconEditTwoTone } from './IconEditTwoTone'

export const IconEdit = /*#__PURE__*/ props =>
  createThemedIcon(props, IconEditFilled, IconEditOutlined, IconEditRounded, IconEditSharp, IconEditTwoTone)
