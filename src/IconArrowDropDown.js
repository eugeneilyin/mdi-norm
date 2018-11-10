import { createThemedIcon } from './utils/createThemedIcon'
import { IconArrowDropDownFilled } from './IconArrowDropDownFilled'
import { IconArrowDropDownOutlined } from './IconArrowDropDownOutlined'
import { IconArrowDropDownRounded } from './IconArrowDropDownRounded'
import { IconArrowDropDownSharp } from './IconArrowDropDownSharp'
import { IconArrowDropDownTwoTone } from './IconArrowDropDownTwoTone'

export const IconArrowDropDown = /*#__PURE__*/ props =>
  createThemedIcon(props, IconArrowDropDownFilled, IconArrowDropDownOutlined, IconArrowDropDownRounded, IconArrowDropDownSharp, IconArrowDropDownTwoTone)
