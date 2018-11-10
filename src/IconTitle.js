import { createThemedIcon } from './utils/createThemedIcon'
import { IconTitleFilled } from './IconTitleFilled'
import { IconTitleOutlined } from './IconTitleOutlined'
import { IconTitleRounded } from './IconTitleRounded'
import { IconTitleSharp } from './IconTitleSharp'
import { IconTitleTwoTone } from './IconTitleTwoTone'

export const IconTitle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTitleFilled, IconTitleOutlined, IconTitleRounded, IconTitleSharp, IconTitleTwoTone)
