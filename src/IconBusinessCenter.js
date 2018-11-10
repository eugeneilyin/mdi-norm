import { createThemedIcon } from './utils/createThemedIcon'
import { IconBusinessCenterFilled } from './IconBusinessCenterFilled'
import { IconBusinessCenterOutlined } from './IconBusinessCenterOutlined'
import { IconBusinessCenterRounded } from './IconBusinessCenterRounded'
import { IconBusinessCenterSharp } from './IconBusinessCenterSharp'
import { IconBusinessCenterTwoTone } from './IconBusinessCenterTwoTone'

export const IconBusinessCenter = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBusinessCenterFilled, IconBusinessCenterOutlined, IconBusinessCenterRounded, IconBusinessCenterSharp, IconBusinessCenterTwoTone)
