import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirplay } from './FilledAirplay'
import { OutlineAirplay } from './OutlineAirplay'
import { RoundAirplay } from './RoundAirplay'
import { SharpAirplay } from './SharpAirplay'
import { TwoToneAirplay } from './TwoToneAirplay'

export const Airplay = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirplay, OutlineAirplay, RoundAirplay, SharpAirplay, TwoToneAirplay)
