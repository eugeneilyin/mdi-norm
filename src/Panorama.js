import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPanorama } from './FilledPanorama'
import { OutlinePanorama } from './OutlinePanorama'
import { RoundPanorama } from './RoundPanorama'
import { SharpPanorama } from './SharpPanorama'
import { TwoTonePanorama } from './TwoTonePanorama'

export const Panorama = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPanorama, OutlinePanorama, RoundPanorama, SharpPanorama, TwoTonePanorama)
