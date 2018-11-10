import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewCarouselFilled } from './IconViewCarouselFilled'
import { IconViewCarouselOutlined } from './IconViewCarouselOutlined'
import { IconViewCarouselRounded } from './IconViewCarouselRounded'
import { IconViewCarouselSharp } from './IconViewCarouselSharp'
import { IconViewCarouselTwoTone } from './IconViewCarouselTwoTone'

export const IconViewCarousel = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewCarouselFilled, IconViewCarouselOutlined, IconViewCarouselRounded, IconViewCarouselSharp, IconViewCarouselTwoTone)
