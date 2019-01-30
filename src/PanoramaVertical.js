import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPanoramaVertical } from './FilledPanoramaVertical'
import { OutlinePanoramaVertical } from './OutlinePanoramaVertical'
import { RoundPanoramaVertical } from './RoundPanoramaVertical'
import { SharpPanoramaVertical } from './SharpPanoramaVertical'
import { TwoTonePanoramaVertical } from './TwoTonePanoramaVertical'

export const PanoramaVertical = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPanoramaVertical, OutlinePanoramaVertical, RoundPanoramaVertical, SharpPanoramaVertical, TwoTonePanoramaVertical)
