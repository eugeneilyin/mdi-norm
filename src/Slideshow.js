import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSlideshow } from './FilledSlideshow'
import { OutlineSlideshow } from './OutlineSlideshow'
import { RoundSlideshow } from './RoundSlideshow'
import { SharpSlideshow } from './SharpSlideshow'
import { TwoToneSlideshow } from './TwoToneSlideshow'

export const Slideshow = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSlideshow, OutlineSlideshow, RoundSlideshow, SharpSlideshow, TwoToneSlideshow)
