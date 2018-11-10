import { createThemedIcon } from './utils/createThemedIcon'
import { IconClearAllFilled } from './IconClearAllFilled'
import { IconClearAllOutlined } from './IconClearAllOutlined'
import { IconClearAllRounded } from './IconClearAllRounded'
import { IconClearAllSharp } from './IconClearAllSharp'
import { IconClearAllTwoTone } from './IconClearAllTwoTone'

export const IconClearAll = /*#__PURE__*/ props =>
  createThemedIcon(props, IconClearAllFilled, IconClearAllOutlined, IconClearAllRounded, IconClearAllSharp, IconClearAllTwoTone)
