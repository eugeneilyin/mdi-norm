import { createThemedIcon } from './utils/createThemedIcon'
import { IconMyLocationFilled } from './IconMyLocationFilled'
import { IconMyLocationOutlined } from './IconMyLocationOutlined'
import { IconMyLocationRounded } from './IconMyLocationRounded'
import { IconMyLocationSharp } from './IconMyLocationSharp'
import { IconMyLocationTwoTone } from './IconMyLocationTwoTone'

export const IconMyLocation = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMyLocationFilled, IconMyLocationOutlined, IconMyLocationRounded, IconMyLocationSharp, IconMyLocationTwoTone)
