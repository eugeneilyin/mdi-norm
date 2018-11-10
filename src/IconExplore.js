import { createThemedIcon } from './utils/createThemedIcon'
import { IconExploreFilled } from './IconExploreFilled'
import { IconExploreOutlined } from './IconExploreOutlined'
import { IconExploreRounded } from './IconExploreRounded'
import { IconExploreSharp } from './IconExploreSharp'
import { IconExploreTwoTone } from './IconExploreTwoTone'

export const IconExplore = /*#__PURE__*/ props =>
  createThemedIcon(props, IconExploreFilled, IconExploreOutlined, IconExploreRounded, IconExploreSharp, IconExploreTwoTone)
