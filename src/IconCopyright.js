import { createThemedIcon } from './utils/createThemedIcon'
import { IconCopyrightFilled } from './IconCopyrightFilled'
import { IconCopyrightOutlined } from './IconCopyrightOutlined'
import { IconCopyrightRounded } from './IconCopyrightRounded'
import { IconCopyrightSharp } from './IconCopyrightSharp'
import { IconCopyrightTwoTone } from './IconCopyrightTwoTone'

export const IconCopyright = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCopyrightFilled, IconCopyrightOutlined, IconCopyrightRounded, IconCopyrightSharp, IconCopyrightTwoTone)
