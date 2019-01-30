import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLandscape } from './FilledLandscape'
import { OutlineLandscape } from './OutlineLandscape'
import { RoundLandscape } from './RoundLandscape'
import { SharpLandscape } from './SharpLandscape'
import { TwoToneLandscape } from './TwoToneLandscape'

export const Landscape = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLandscape, OutlineLandscape, RoundLandscape, SharpLandscape, TwoToneLandscape)
