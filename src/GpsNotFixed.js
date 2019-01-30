import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGpsNotFixed } from './FilledGpsNotFixed'
import { OutlineGpsNotFixed } from './OutlineGpsNotFixed'
import { RoundGpsNotFixed } from './RoundGpsNotFixed'
import { SharpGpsNotFixed } from './SharpGpsNotFixed'
import { TwoToneGpsNotFixed } from './TwoToneGpsNotFixed'

export const GpsNotFixed = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGpsNotFixed, OutlineGpsNotFixed, RoundGpsNotFixed, SharpGpsNotFixed, TwoToneGpsNotFixed)
