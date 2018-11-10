import { createThemedIcon } from './utils/createThemedIcon'
import { IconBorderAllFilled } from './IconBorderAllFilled'
import { IconBorderAllOutlined } from './IconBorderAllOutlined'
import { IconBorderAllRounded } from './IconBorderAllRounded'
import { IconBorderAllSharp } from './IconBorderAllSharp'
import { IconBorderAllTwoTone } from './IconBorderAllTwoTone'

export const IconBorderAll = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBorderAllFilled, IconBorderAllOutlined, IconBorderAllRounded, IconBorderAllSharp, IconBorderAllTwoTone)
