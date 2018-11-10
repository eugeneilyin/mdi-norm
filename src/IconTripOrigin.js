import { createThemedIcon } from './utils/createThemedIcon'
import { IconTripOriginFilled } from './IconTripOriginFilled'
import { IconTripOriginOutlined } from './IconTripOriginOutlined'
import { IconTripOriginRounded } from './IconTripOriginRounded'
import { IconTripOriginSharp } from './IconTripOriginSharp'
import { IconTripOriginTwoTone } from './IconTripOriginTwoTone'

export const IconTripOrigin = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTripOriginFilled, IconTripOriginOutlined, IconTripOriginRounded, IconTripOriginSharp, IconTripOriginTwoTone)
