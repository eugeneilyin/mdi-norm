import { createThemedIcon } from './utils/createThemedIcon'
import { IconMobileFriendlyFilled } from './IconMobileFriendlyFilled'
import { IconMobileFriendlyOutlined } from './IconMobileFriendlyOutlined'
import { IconMobileFriendlyRounded } from './IconMobileFriendlyRounded'
import { IconMobileFriendlySharp } from './IconMobileFriendlySharp'
import { IconMobileFriendlyTwoTone } from './IconMobileFriendlyTwoTone'

export const IconMobileFriendly = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMobileFriendlyFilled, IconMobileFriendlyOutlined, IconMobileFriendlyRounded, IconMobileFriendlySharp, IconMobileFriendlyTwoTone)
