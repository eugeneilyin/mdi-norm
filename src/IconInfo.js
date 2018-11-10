import { createThemedIcon } from './utils/createThemedIcon'
import { IconInfoFilled } from './IconInfoFilled'
import { IconInfoOutlined } from './IconInfoOutlined'
import { IconInfoRounded } from './IconInfoRounded'
import { IconInfoSharp } from './IconInfoSharp'
import { IconInfoTwoTone } from './IconInfoTwoTone'

export const IconInfo = /*#__PURE__*/ props =>
  createThemedIcon(props, IconInfoFilled, IconInfoOutlined, IconInfoRounded, IconInfoSharp, IconInfoTwoTone)
