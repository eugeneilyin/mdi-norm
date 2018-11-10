import { createThemedIcon } from './utils/createThemedIcon'
import { IconSpaFilled } from './IconSpaFilled'
import { IconSpaOutlined } from './IconSpaOutlined'
import { IconSpaRounded } from './IconSpaRounded'
import { IconSpaSharp } from './IconSpaSharp'
import { IconSpaTwoTone } from './IconSpaTwoTone'

export const IconSpa = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSpaFilled, IconSpaOutlined, IconSpaRounded, IconSpaSharp, IconSpaTwoTone)
