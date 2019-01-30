import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirplanemodeActive } from './FilledAirplanemodeActive'
import { OutlineAirplanemodeActive } from './OutlineAirplanemodeActive'
import { RoundAirplanemodeActive } from './RoundAirplanemodeActive'
import { SharpAirplanemodeActive } from './SharpAirplanemodeActive'
import { TwoToneAirplanemodeActive } from './TwoToneAirplanemodeActive'

export const AirplanemodeActive = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirplanemodeActive, OutlineAirplanemodeActive, RoundAirplanemodeActive, SharpAirplanemodeActive, TwoToneAirplanemodeActive)
