import { createThemedIcon } from './utils/createThemedIcon'
import { IconMoodFilled } from './IconMoodFilled'
import { IconMoodOutlined } from './IconMoodOutlined'
import { IconMoodRounded } from './IconMoodRounded'
import { IconMoodSharp } from './IconMoodSharp'
import { IconMoodTwoTone } from './IconMoodTwoTone'

export const IconMood = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMoodFilled, IconMoodOutlined, IconMoodRounded, IconMoodSharp, IconMoodTwoTone)
