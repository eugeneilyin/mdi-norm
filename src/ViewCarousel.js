import { createThemedIcon } from './utils/createThemedIcon'
import { FilledViewCarousel } from './FilledViewCarousel'
import { OutlineViewCarousel } from './OutlineViewCarousel'
import { RoundViewCarousel } from './RoundViewCarousel'
import { SharpViewCarousel } from './SharpViewCarousel'
import { TwoToneViewCarousel } from './TwoToneViewCarousel'

export const ViewCarousel = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledViewCarousel, OutlineViewCarousel, RoundViewCarousel, SharpViewCarousel, TwoToneViewCarousel)
