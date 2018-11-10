import { createThemedIcon } from './utils/createThemedIcon'
import { IconDeleteFilled } from './IconDeleteFilled'
import { IconDeleteOutlined } from './IconDeleteOutlined'
import { IconDeleteRounded } from './IconDeleteRounded'
import { IconDeleteSharp } from './IconDeleteSharp'
import { IconDeleteTwoTone } from './IconDeleteTwoTone'

export const IconDelete = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDeleteFilled, IconDeleteOutlined, IconDeleteRounded, IconDeleteSharp, IconDeleteTwoTone)
