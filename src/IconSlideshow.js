import { createThemedIcon } from './utils/createThemedIcon'
import { IconSlideshowFilled } from './IconSlideshowFilled'
import { IconSlideshowOutlined } from './IconSlideshowOutlined'
import { IconSlideshowRounded } from './IconSlideshowRounded'
import { IconSlideshowSharp } from './IconSlideshowSharp'
import { IconSlideshowTwoTone } from './IconSlideshowTwoTone'

export const IconSlideshow = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSlideshowFilled, IconSlideshowOutlined, IconSlideshowRounded, IconSlideshowSharp, IconSlideshowTwoTone)
