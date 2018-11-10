import { createThemedIcon } from './utils/createThemedIcon'
import { IconCheckBoxFilled } from './IconCheckBoxFilled'
import { IconCheckBoxOutlined } from './IconCheckBoxOutlined'
import { IconCheckBoxRounded } from './IconCheckBoxRounded'
import { IconCheckBoxSharp } from './IconCheckBoxSharp'
import { IconCheckBoxTwoTone } from './IconCheckBoxTwoTone'

export const IconCheckBox = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCheckBoxFilled, IconCheckBoxOutlined, IconCheckBoxRounded, IconCheckBoxSharp, IconCheckBoxTwoTone)
