import { createThemedIcon } from './utils/createThemedIcon'
import { IconPageviewFilled } from './IconPageviewFilled'
import { IconPageviewOutlined } from './IconPageviewOutlined'
import { IconPageviewRounded } from './IconPageviewRounded'
import { IconPageviewSharp } from './IconPageviewSharp'
import { IconPageviewTwoTone } from './IconPageviewTwoTone'

export const IconPageview = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPageviewFilled, IconPageviewOutlined, IconPageviewRounded, IconPageviewSharp, IconPageviewTwoTone)
