import { createThemedIcon } from './utils/createThemedIcon'
import { IconCardTravelFilled } from './IconCardTravelFilled'
import { IconCardTravelOutlined } from './IconCardTravelOutlined'
import { IconCardTravelRounded } from './IconCardTravelRounded'
import { IconCardTravelSharp } from './IconCardTravelSharp'
import { IconCardTravelTwoTone } from './IconCardTravelTwoTone'

export const IconCardTravel = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCardTravelFilled, IconCardTravelOutlined, IconCardTravelRounded, IconCardTravelSharp, IconCardTravelTwoTone)
