import { createThemedIcon } from './utils/createThemedIcon'
import { IconHistoryFilled } from './IconHistoryFilled'
import { IconHistoryOutlined } from './IconHistoryOutlined'
import { IconHistoryRounded } from './IconHistoryRounded'
import { IconHistorySharp } from './IconHistorySharp'
import { IconHistoryTwoTone } from './IconHistoryTwoTone'

export const IconHistory = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHistoryFilled, IconHistoryOutlined, IconHistoryRounded, IconHistorySharp, IconHistoryTwoTone)
