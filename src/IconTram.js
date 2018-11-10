import { createThemedIcon } from './utils/createThemedIcon'
import { IconTramFilled } from './IconTramFilled'
import { IconTramOutlined } from './IconTramOutlined'
import { IconTramRounded } from './IconTramRounded'
import { IconTramSharp } from './IconTramSharp'
import { IconTramTwoTone } from './IconTramTwoTone'

export const IconTram = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTramFilled, IconTramOutlined, IconTramRounded, IconTramSharp, IconTramTwoTone)
