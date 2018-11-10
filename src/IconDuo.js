import { createThemedIcon } from './utils/createThemedIcon'
import { IconDuoFilled } from './IconDuoFilled'
import { IconDuoOutlined } from './IconDuoOutlined'
import { IconDuoRounded } from './IconDuoRounded'
import { IconDuoSharp } from './IconDuoSharp'
import { IconDuoTwoTone } from './IconDuoTwoTone'

export const IconDuo = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDuoFilled, IconDuoOutlined, IconDuoRounded, IconDuoSharp, IconDuoTwoTone)
