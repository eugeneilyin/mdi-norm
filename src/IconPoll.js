import { createThemedIcon } from './utils/createThemedIcon'
import { IconPollFilled } from './IconPollFilled'
import { IconPollOutlined } from './IconPollOutlined'
import { IconPollRounded } from './IconPollRounded'
import { IconPollSharp } from './IconPollSharp'
import { IconPollTwoTone } from './IconPollTwoTone'

export const IconPoll = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPollFilled, IconPollOutlined, IconPollRounded, IconPollSharp, IconPollTwoTone)
