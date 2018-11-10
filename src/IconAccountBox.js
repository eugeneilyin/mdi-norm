import { createThemedIcon } from './utils/createThemedIcon'
import { IconAccountBoxFilled } from './IconAccountBoxFilled'
import { IconAccountBoxOutlined } from './IconAccountBoxOutlined'
import { IconAccountBoxRounded } from './IconAccountBoxRounded'
import { IconAccountBoxSharp } from './IconAccountBoxSharp'
import { IconAccountBoxTwoTone } from './IconAccountBoxTwoTone'

export const IconAccountBox = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAccountBoxFilled, IconAccountBoxOutlined, IconAccountBoxRounded, IconAccountBoxSharp, IconAccountBoxTwoTone)
