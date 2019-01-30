import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSatellite } from './FilledSatellite'
import { OutlineSatellite } from './OutlineSatellite'
import { RoundSatellite } from './RoundSatellite'
import { SharpSatellite } from './SharpSatellite'
import { TwoToneSatellite } from './TwoToneSatellite'

export const Satellite = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSatellite, OutlineSatellite, RoundSatellite, SharpSatellite, TwoToneSatellite)
