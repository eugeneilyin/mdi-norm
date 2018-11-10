import { createThemedIcon } from './utils/createThemedIcon'
import { IconTollFilled } from './IconTollFilled'
import { IconTollOutlined } from './IconTollOutlined'
import { IconTollRounded } from './IconTollRounded'
import { IconTollSharp } from './IconTollSharp'
import { IconTollTwoTone } from './IconTollTwoTone'

export const IconToll = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTollFilled, IconTollOutlined, IconTollRounded, IconTollSharp, IconTollTwoTone)
