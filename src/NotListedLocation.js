import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNotListedLocation } from './FilledNotListedLocation'
import { OutlineNotListedLocation } from './OutlineNotListedLocation'
import { RoundNotListedLocation } from './RoundNotListedLocation'
import { SharpNotListedLocation } from './SharpNotListedLocation'
import { TwoToneNotListedLocation } from './TwoToneNotListedLocation'

export const NotListedLocation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNotListedLocation, OutlineNotListedLocation, RoundNotListedLocation, SharpNotListedLocation, TwoToneNotListedLocation)
