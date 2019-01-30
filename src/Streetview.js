import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStreetview } from './FilledStreetview'
import { OutlineStreetview } from './OutlineStreetview'
import { RoundStreetview } from './RoundStreetview'
import { SharpStreetview } from './SharpStreetview'
import { TwoToneStreetview } from './TwoToneStreetview'

export const Streetview = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStreetview, OutlineStreetview, RoundStreetview, SharpStreetview, TwoToneStreetview)
