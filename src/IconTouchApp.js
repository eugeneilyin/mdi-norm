import { createThemedIcon } from './utils/createThemedIcon'
import { IconTouchAppFilled } from './IconTouchAppFilled'
import { IconTouchAppOutlined } from './IconTouchAppOutlined'
import { IconTouchAppRounded } from './IconTouchAppRounded'
import { IconTouchAppSharp } from './IconTouchAppSharp'
import { IconTouchAppTwoTone } from './IconTouchAppTwoTone'

export const IconTouchApp = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTouchAppFilled, IconTouchAppOutlined, IconTouchAppRounded, IconTouchAppSharp, IconTouchAppTwoTone)
