import { createThemedIcon } from './utils/createThemedIcon'
import { IconFilterListFilled } from './IconFilterListFilled'
import { IconFilterListOutlined } from './IconFilterListOutlined'
import { IconFilterListRounded } from './IconFilterListRounded'
import { IconFilterListSharp } from './IconFilterListSharp'
import { IconFilterListTwoTone } from './IconFilterListTwoTone'

export const IconFilterList = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFilterListFilled, IconFilterListOutlined, IconFilterListRounded, IconFilterListSharp, IconFilterListTwoTone)
