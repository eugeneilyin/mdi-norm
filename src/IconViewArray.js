import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewArrayFilled } from './IconViewArrayFilled'
import { IconViewArrayOutlined } from './IconViewArrayOutlined'
import { IconViewArrayRounded } from './IconViewArrayRounded'
import { IconViewArraySharp } from './IconViewArraySharp'
import { IconViewArrayTwoTone } from './IconViewArrayTwoTone'

export const IconViewArray = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewArrayFilled, IconViewArrayOutlined, IconViewArrayRounded, IconViewArraySharp, IconViewArrayTwoTone)
