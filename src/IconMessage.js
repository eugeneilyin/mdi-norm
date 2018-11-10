import { createThemedIcon } from './utils/createThemedIcon'
import { IconMessageFilled } from './IconMessageFilled'
import { IconMessageOutlined } from './IconMessageOutlined'
import { IconMessageRounded } from './IconMessageRounded'
import { IconMessageSharp } from './IconMessageSharp'
import { IconMessageTwoTone } from './IconMessageTwoTone'

export const IconMessage = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMessageFilled, IconMessageOutlined, IconMessageRounded, IconMessageSharp, IconMessageTwoTone)
