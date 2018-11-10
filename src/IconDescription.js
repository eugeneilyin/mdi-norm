import { createThemedIcon } from './utils/createThemedIcon'
import { IconDescriptionFilled } from './IconDescriptionFilled'
import { IconDescriptionOutlined } from './IconDescriptionOutlined'
import { IconDescriptionRounded } from './IconDescriptionRounded'
import { IconDescriptionSharp } from './IconDescriptionSharp'
import { IconDescriptionTwoTone } from './IconDescriptionTwoTone'

export const IconDescription = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDescriptionFilled, IconDescriptionOutlined, IconDescriptionRounded, IconDescriptionSharp, IconDescriptionTwoTone)
