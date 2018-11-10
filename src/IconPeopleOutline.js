import { createThemedIcon } from './utils/createThemedIcon'
import { IconPeopleOutlineFilled } from './IconPeopleOutlineFilled'
import { IconPeopleOutlineOutlined } from './IconPeopleOutlineOutlined'
import { IconPeopleOutlineRounded } from './IconPeopleOutlineRounded'
import { IconPeopleOutlineSharp } from './IconPeopleOutlineSharp'
import { IconPeopleOutlineTwoTone } from './IconPeopleOutlineTwoTone'

export const IconPeopleOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPeopleOutlineFilled, IconPeopleOutlineOutlined, IconPeopleOutlineRounded, IconPeopleOutlineSharp, IconPeopleOutlineTwoTone)
