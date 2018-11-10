import { createThemedIcon } from './utils/createThemedIcon'
import { IconRouterFilled } from './IconRouterFilled'
import { IconRouterOutlined } from './IconRouterOutlined'
import { IconRouterRounded } from './IconRouterRounded'
import { IconRouterSharp } from './IconRouterSharp'
import { IconRouterTwoTone } from './IconRouterTwoTone'

export const IconRouter = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRouterFilled, IconRouterOutlined, IconRouterRounded, IconRouterSharp, IconRouterTwoTone)
