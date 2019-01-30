import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalOffer } from './FilledLocalOffer'
import { OutlineLocalOffer } from './OutlineLocalOffer'
import { RoundLocalOffer } from './RoundLocalOffer'
import { SharpLocalOffer } from './SharpLocalOffer'
import { TwoToneLocalOffer } from './TwoToneLocalOffer'

export const LocalOffer = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalOffer, OutlineLocalOffer, RoundLocalOffer, SharpLocalOffer, TwoToneLocalOffer)
