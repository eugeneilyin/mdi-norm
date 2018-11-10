import { createThemedIcon } from './utils/createThemedIcon'
import { IconPanToolFilled } from './IconPanToolFilled'
import { IconPanToolOutlined } from './IconPanToolOutlined'
import { IconPanToolRounded } from './IconPanToolRounded'
import { IconPanToolSharp } from './IconPanToolSharp'
import { IconPanToolTwoTone } from './IconPanToolTwoTone'

export const IconPanTool = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPanToolFilled, IconPanToolOutlined, IconPanToolRounded, IconPanToolSharp, IconPanToolTwoTone)
