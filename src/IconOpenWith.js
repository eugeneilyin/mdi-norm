import { createThemedIcon } from './utils/createThemedIcon'
import { IconOpenWithFilled } from './IconOpenWithFilled'
import { IconOpenWithOutlined } from './IconOpenWithOutlined'
import { IconOpenWithRounded } from './IconOpenWithRounded'
import { IconOpenWithSharp } from './IconOpenWithSharp'
import { IconOpenWithTwoTone } from './IconOpenWithTwoTone'

export const IconOpenWith = /*#__PURE__*/ props =>
  createThemedIcon(props, IconOpenWithFilled, IconOpenWithOutlined, IconOpenWithRounded, IconOpenWithSharp, IconOpenWithTwoTone)
