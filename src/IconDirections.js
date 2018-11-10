import { createThemedIcon } from './utils/createThemedIcon'
import { IconDirectionsFilled } from './IconDirectionsFilled'
import { IconDirectionsOutlined } from './IconDirectionsOutlined'
import { IconDirectionsRounded } from './IconDirectionsRounded'
import { IconDirectionsSharp } from './IconDirectionsSharp'
import { IconDirectionsTwoTone } from './IconDirectionsTwoTone'

export const IconDirections = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDirectionsFilled, IconDirectionsOutlined, IconDirectionsRounded, IconDirectionsSharp, IconDirectionsTwoTone)
