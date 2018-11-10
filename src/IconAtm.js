import { createThemedIcon } from './utils/createThemedIcon'
import { IconAtmFilled } from './IconAtmFilled'
import { IconAtmOutlined } from './IconAtmOutlined'
import { IconAtmRounded } from './IconAtmRounded'
import { IconAtmSharp } from './IconAtmSharp'
import { IconAtmTwoTone } from './IconAtmTwoTone'

export const IconAtm = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAtmFilled, IconAtmOutlined, IconAtmRounded, IconAtmSharp, IconAtmTwoTone)
