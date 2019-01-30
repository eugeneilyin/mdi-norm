import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPanoramaWideAngle } from './FilledPanoramaWideAngle'
import { OutlinePanoramaWideAngle } from './OutlinePanoramaWideAngle'
import { RoundPanoramaWideAngle } from './RoundPanoramaWideAngle'
import { SharpPanoramaWideAngle } from './SharpPanoramaWideAngle'
import { TwoTonePanoramaWideAngle } from './TwoTonePanoramaWideAngle'

export const PanoramaWideAngle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPanoramaWideAngle, OutlinePanoramaWideAngle, RoundPanoramaWideAngle, SharpPanoramaWideAngle, TwoTonePanoramaWideAngle)
