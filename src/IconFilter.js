import { createThemedIcon } from './utils/createThemedIcon'
import { IconFilterFilled } from './IconFilterFilled'
import { IconFilterOutlined } from './IconFilterOutlined'
import { IconFilterRounded } from './IconFilterRounded'
import { IconFilterSharp } from './IconFilterSharp'
import { IconFilterTwoTone } from './IconFilterTwoTone'

export const IconFilter = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFilterFilled, IconFilterOutlined, IconFilterRounded, IconFilterSharp, IconFilterTwoTone)
