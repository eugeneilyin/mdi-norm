import { createThemedIcon } from './utils/createThemedIcon'
import { IconPlayArrowFilled } from './IconPlayArrowFilled'
import { IconPlayArrowOutlined } from './IconPlayArrowOutlined'
import { IconPlayArrowRounded } from './IconPlayArrowRounded'
import { IconPlayArrowSharp } from './IconPlayArrowSharp'
import { IconPlayArrowTwoTone } from './IconPlayArrowTwoTone'

export const IconPlayArrow = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPlayArrowFilled, IconPlayArrowOutlined, IconPlayArrowRounded, IconPlayArrowSharp, IconPlayArrowTwoTone)
