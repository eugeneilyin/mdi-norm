import { createThemedIcon } from './utils/createThemedIcon'
import { IconDiscFullFilled } from './IconDiscFullFilled'
import { IconDiscFullOutlined } from './IconDiscFullOutlined'
import { IconDiscFullRounded } from './IconDiscFullRounded'
import { IconDiscFullSharp } from './IconDiscFullSharp'
import { IconDiscFullTwoTone } from './IconDiscFullTwoTone'

export const IconDiscFull = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDiscFullFilled, IconDiscFullOutlined, IconDiscFullRounded, IconDiscFullSharp, IconDiscFullTwoTone)
