import { createThemedIcon } from './utils/createThemedIcon'
import { IconLabelFilled } from './IconLabelFilled'
import { IconLabelOutlined } from './IconLabelOutlined'
import { IconLabelRounded } from './IconLabelRounded'
import { IconLabelSharp } from './IconLabelSharp'
import { IconLabelTwoTone } from './IconLabelTwoTone'

export const IconLabel = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLabelFilled, IconLabelOutlined, IconLabelRounded, IconLabelSharp, IconLabelTwoTone)
