import { createThemedIcon } from './utils/createThemedIcon'
import { IconPauseFilled } from './IconPauseFilled'
import { IconPauseOutlined } from './IconPauseOutlined'
import { IconPauseRounded } from './IconPauseRounded'
import { IconPauseSharp } from './IconPauseSharp'
import { IconPauseTwoTone } from './IconPauseTwoTone'

export const IconPause = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPauseFilled, IconPauseOutlined, IconPauseRounded, IconPauseSharp, IconPauseTwoTone)
