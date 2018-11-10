import { createThemedIcon } from './utils/createThemedIcon'
import { IconEjectFilled } from './IconEjectFilled'
import { IconEjectOutlined } from './IconEjectOutlined'
import { IconEjectRounded } from './IconEjectRounded'
import { IconEjectSharp } from './IconEjectSharp'
import { IconEjectTwoTone } from './IconEjectTwoTone'

export const IconEject = /*#__PURE__*/ props =>
  createThemedIcon(props, IconEjectFilled, IconEjectOutlined, IconEjectRounded, IconEjectSharp, IconEjectTwoTone)
