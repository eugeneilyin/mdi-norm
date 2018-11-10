import { createThemedIcon } from './utils/createThemedIcon'
import { IconCodeFilled } from './IconCodeFilled'
import { IconCodeOutlined } from './IconCodeOutlined'
import { IconCodeRounded } from './IconCodeRounded'
import { IconCodeSharp } from './IconCodeSharp'
import { IconCodeTwoTone } from './IconCodeTwoTone'

export const IconCode = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCodeFilled, IconCodeOutlined, IconCodeRounded, IconCodeSharp, IconCodeTwoTone)
