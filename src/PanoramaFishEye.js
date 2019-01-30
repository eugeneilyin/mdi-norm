import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPanoramaFishEye } from './FilledPanoramaFishEye'
import { OutlinePanoramaFishEye } from './OutlinePanoramaFishEye'
import { RoundPanoramaFishEye } from './RoundPanoramaFishEye'
import { SharpPanoramaFishEye } from './SharpPanoramaFishEye'
import { TwoTonePanoramaFishEye } from './TwoTonePanoramaFishEye'

export const PanoramaFishEye = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPanoramaFishEye, OutlinePanoramaFishEye, RoundPanoramaFishEye, SharpPanoramaFishEye, TwoTonePanoramaFishEye)
