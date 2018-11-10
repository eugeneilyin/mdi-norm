import { createThemedIcon } from './utils/createThemedIcon'
import { IconGroupWorkFilled } from './IconGroupWorkFilled'
import { IconGroupWorkOutlined } from './IconGroupWorkOutlined'
import { IconGroupWorkRounded } from './IconGroupWorkRounded'
import { IconGroupWorkSharp } from './IconGroupWorkSharp'
import { IconGroupWorkTwoTone } from './IconGroupWorkTwoTone'

export const IconGroupWork = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGroupWorkFilled, IconGroupWorkOutlined, IconGroupWorkRounded, IconGroupWorkSharp, IconGroupWorkTwoTone)
