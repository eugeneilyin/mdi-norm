import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPanoramaHorizontal } from './FilledPanoramaHorizontal'
import { OutlinePanoramaHorizontal } from './OutlinePanoramaHorizontal'
import { RoundPanoramaHorizontal } from './RoundPanoramaHorizontal'
import { SharpPanoramaHorizontal } from './SharpPanoramaHorizontal'
import { TwoTonePanoramaHorizontal } from './TwoTonePanoramaHorizontal'

export const PanoramaHorizontal = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPanoramaHorizontal, OutlinePanoramaHorizontal, RoundPanoramaHorizontal, SharpPanoramaHorizontal, TwoTonePanoramaHorizontal)
