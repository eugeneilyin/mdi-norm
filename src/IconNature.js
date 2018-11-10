import { createThemedIcon } from './utils/createThemedIcon'
import { IconNatureFilled } from './IconNatureFilled'
import { IconNatureOutlined } from './IconNatureOutlined'
import { IconNatureRounded } from './IconNatureRounded'
import { IconNatureSharp } from './IconNatureSharp'
import { IconNatureTwoTone } from './IconNatureTwoTone'

export const IconNature = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNatureFilled, IconNatureOutlined, IconNatureRounded, IconNatureSharp, IconNatureTwoTone)
