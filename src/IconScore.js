import { createThemedIcon } from './utils/createThemedIcon'
import { IconScoreFilled } from './IconScoreFilled'
import { IconScoreOutlined } from './IconScoreOutlined'
import { IconScoreRounded } from './IconScoreRounded'
import { IconScoreSharp } from './IconScoreSharp'
import { IconScoreTwoTone } from './IconScoreTwoTone'

export const IconScore = /*#__PURE__*/ props =>
  createThemedIcon(props, IconScoreFilled, IconScoreOutlined, IconScoreRounded, IconScoreSharp, IconScoreTwoTone)
