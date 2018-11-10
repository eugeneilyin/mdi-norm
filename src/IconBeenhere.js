import { createThemedIcon } from './utils/createThemedIcon'
import { IconBeenhereFilled } from './IconBeenhereFilled'
import { IconBeenhereOutlined } from './IconBeenhereOutlined'
import { IconBeenhereRounded } from './IconBeenhereRounded'
import { IconBeenhereSharp } from './IconBeenhereSharp'
import { IconBeenhereTwoTone } from './IconBeenhereTwoTone'

export const IconBeenhere = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBeenhereFilled, IconBeenhereOutlined, IconBeenhereRounded, IconBeenhereSharp, IconBeenhereTwoTone)
