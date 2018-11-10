import { createThemedIcon } from './utils/createThemedIcon'
import { IconExplicitFilled } from './IconExplicitFilled'
import { IconExplicitOutlined } from './IconExplicitOutlined'
import { IconExplicitRounded } from './IconExplicitRounded'
import { IconExplicitSharp } from './IconExplicitSharp'
import { IconExplicitTwoTone } from './IconExplicitTwoTone'

export const IconExplicit = /*#__PURE__*/ props =>
  createThemedIcon(props, IconExplicitFilled, IconExplicitOutlined, IconExplicitRounded, IconExplicitSharp, IconExplicitTwoTone)
