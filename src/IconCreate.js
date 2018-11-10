import { createThemedIcon } from './utils/createThemedIcon'
import { IconCreateFilled } from './IconCreateFilled'
import { IconCreateOutlined } from './IconCreateOutlined'
import { IconCreateRounded } from './IconCreateRounded'
import { IconCreateSharp } from './IconCreateSharp'
import { IconCreateTwoTone } from './IconCreateTwoTone'

export const IconCreate = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCreateFilled, IconCreateOutlined, IconCreateRounded, IconCreateSharp, IconCreateTwoTone)
