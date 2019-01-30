import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGpsFixed } from './FilledGpsFixed'
import { OutlineGpsFixed } from './OutlineGpsFixed'
import { RoundGpsFixed } from './RoundGpsFixed'
import { SharpGpsFixed } from './SharpGpsFixed'
import { TwoToneGpsFixed } from './TwoToneGpsFixed'

export const GpsFixed = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGpsFixed, OutlineGpsFixed, RoundGpsFixed, SharpGpsFixed, TwoToneGpsFixed)
