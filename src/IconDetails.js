import { createThemedIcon } from './utils/createThemedIcon'
import { IconDetailsFilled } from './IconDetailsFilled'
import { IconDetailsOutlined } from './IconDetailsOutlined'
import { IconDetailsRounded } from './IconDetailsRounded'
import { IconDetailsSharp } from './IconDetailsSharp'
import { IconDetailsTwoTone } from './IconDetailsTwoTone'

export const IconDetails = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDetailsFilled, IconDetailsOutlined, IconDetailsRounded, IconDetailsSharp, IconDetailsTwoTone)
