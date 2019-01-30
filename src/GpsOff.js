import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGpsOff } from './FilledGpsOff'
import { OutlineGpsOff } from './OutlineGpsOff'
import { RoundGpsOff } from './RoundGpsOff'
import { SharpGpsOff } from './SharpGpsOff'
import { TwoToneGpsOff } from './TwoToneGpsOff'

export const GpsOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGpsOff, OutlineGpsOff, RoundGpsOff, SharpGpsOff, TwoToneGpsOff)
