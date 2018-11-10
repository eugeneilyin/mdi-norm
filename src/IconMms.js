import { createThemedIcon } from './utils/createThemedIcon'
import { IconMmsFilled } from './IconMmsFilled'
import { IconMmsOutlined } from './IconMmsOutlined'
import { IconMmsRounded } from './IconMmsRounded'
import { IconMmsSharp } from './IconMmsSharp'
import { IconMmsTwoTone } from './IconMmsTwoTone'

export const IconMms = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMmsFilled, IconMmsOutlined, IconMmsRounded, IconMmsSharp, IconMmsTwoTone)
