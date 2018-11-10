import { createThemedIcon } from './utils/createThemedIcon'
import { IconClassFilled } from './IconClassFilled'
import { IconClassOutlined } from './IconClassOutlined'
import { IconClassRounded } from './IconClassRounded'
import { IconClassSharp } from './IconClassSharp'
import { IconClassTwoTone } from './IconClassTwoTone'

export const IconClass = /*#__PURE__*/ props =>
  createThemedIcon(props, IconClassFilled, IconClassOutlined, IconClassRounded, IconClassSharp, IconClassTwoTone)
