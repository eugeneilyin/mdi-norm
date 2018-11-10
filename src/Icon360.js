import { createThemedIcon } from './utils/createThemedIcon'
import { Icon360Filled } from './Icon360Filled'
import { Icon360Outlined } from './Icon360Outlined'
import { Icon360Rounded } from './Icon360Rounded'
import { Icon360Sharp } from './Icon360Sharp'
import { Icon360TwoTone } from './Icon360TwoTone'

export const Icon360 = /*#__PURE__*/ props =>
  createThemedIcon(props, Icon360Filled, Icon360Outlined, Icon360Rounded, Icon360Sharp, Icon360TwoTone)
