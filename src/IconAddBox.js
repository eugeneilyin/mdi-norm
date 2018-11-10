import { createThemedIcon } from './utils/createThemedIcon'
import { IconAddBoxFilled } from './IconAddBoxFilled'
import { IconAddBoxOutlined } from './IconAddBoxOutlined'
import { IconAddBoxRounded } from './IconAddBoxRounded'
import { IconAddBoxSharp } from './IconAddBoxSharp'
import { IconAddBoxTwoTone } from './IconAddBoxTwoTone'

export const IconAddBox = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAddBoxFilled, IconAddBoxOutlined, IconAddBoxRounded, IconAddBoxSharp, IconAddBoxTwoTone)
