import { createThemedIcon } from './utils/createThemedIcon'
import { IconSelectAllFilled } from './IconSelectAllFilled'
import { IconSelectAllOutlined } from './IconSelectAllOutlined'
import { IconSelectAllRounded } from './IconSelectAllRounded'
import { IconSelectAllSharp } from './IconSelectAllSharp'
import { IconSelectAllTwoTone } from './IconSelectAllTwoTone'

export const IconSelectAll = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSelectAllFilled, IconSelectAllOutlined, IconSelectAllRounded, IconSelectAllSharp, IconSelectAllTwoTone)
