import { createThemedIcon } from './utils/createThemedIcon'
import { IconAccessTimeFilled } from './IconAccessTimeFilled'
import { IconAccessTimeOutlined } from './IconAccessTimeOutlined'
import { IconAccessTimeRounded } from './IconAccessTimeRounded'
import { IconAccessTimeSharp } from './IconAccessTimeSharp'
import { IconAccessTimeTwoTone } from './IconAccessTimeTwoTone'

export const IconAccessTime = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAccessTimeFilled, IconAccessTimeOutlined, IconAccessTimeRounded, IconAccessTimeSharp, IconAccessTimeTwoTone)
