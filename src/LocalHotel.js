import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalHotel } from './FilledLocalHotel'
import { OutlineLocalHotel } from './OutlineLocalHotel'
import { RoundLocalHotel } from './RoundLocalHotel'
import { SharpLocalHotel } from './SharpLocalHotel'
import { TwoToneLocalHotel } from './TwoToneLocalHotel'

export const LocalHotel = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalHotel, OutlineLocalHotel, RoundLocalHotel, SharpLocalHotel, TwoToneLocalHotel)
