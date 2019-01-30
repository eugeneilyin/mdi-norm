import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTripOrigin } from './FilledTripOrigin'
import { OutlineTripOrigin } from './OutlineTripOrigin'
import { RoundTripOrigin } from './RoundTripOrigin'
import { SharpTripOrigin } from './SharpTripOrigin'
import { TwoToneTripOrigin } from './TwoToneTripOrigin'

export const TripOrigin = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTripOrigin, OutlineTripOrigin, RoundTripOrigin, SharpTripOrigin, TwoToneTripOrigin)
