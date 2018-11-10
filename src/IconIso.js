import { createThemedIcon } from './utils/createThemedIcon'
import { IconIsoFilled } from './IconIsoFilled'
import { IconIsoOutlined } from './IconIsoOutlined'
import { IconIsoRounded } from './IconIsoRounded'
import { IconIsoSharp } from './IconIsoSharp'
import { IconIsoTwoTone } from './IconIsoTwoTone'

export const IconIso = /*#__PURE__*/ props =>
  createThemedIcon(props, IconIsoFilled, IconIsoOutlined, IconIsoRounded, IconIsoSharp, IconIsoTwoTone)
