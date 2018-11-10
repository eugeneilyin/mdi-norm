import { createThemedIcon } from './utils/createThemedIcon'
import { IconWcFilled } from './IconWcFilled'
import { IconWcOutlined } from './IconWcOutlined'
import { IconWcRounded } from './IconWcRounded'
import { IconWcSharp } from './IconWcSharp'
import { IconWcTwoTone } from './IconWcTwoTone'

export const IconWc = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWcFilled, IconWcOutlined, IconWcRounded, IconWcSharp, IconWcTwoTone)
