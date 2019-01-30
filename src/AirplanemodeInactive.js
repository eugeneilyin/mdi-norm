import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirplanemodeInactive } from './FilledAirplanemodeInactive'
import { OutlineAirplanemodeInactive } from './OutlineAirplanemodeInactive'
import { RoundAirplanemodeInactive } from './RoundAirplanemodeInactive'
import { SharpAirplanemodeInactive } from './SharpAirplanemodeInactive'
import { TwoToneAirplanemodeInactive } from './TwoToneAirplanemodeInactive'

export const AirplanemodeInactive = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirplanemodeInactive, OutlineAirplanemodeInactive, RoundAirplanemodeInactive, SharpAirplanemodeInactive, TwoToneAirplanemodeInactive)
