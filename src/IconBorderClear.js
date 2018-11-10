import { createThemedIcon } from './utils/createThemedIcon'
import { IconBorderClearFilled } from './IconBorderClearFilled'
import { IconBorderClearOutlined } from './IconBorderClearOutlined'
import { IconBorderClearRounded } from './IconBorderClearRounded'
import { IconBorderClearSharp } from './IconBorderClearSharp'
import { IconBorderClearTwoTone } from './IconBorderClearTwoTone'

export const IconBorderClear = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBorderClearFilled, IconBorderClearOutlined, IconBorderClearRounded, IconBorderClearSharp, IconBorderClearTwoTone)
