import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLayers } from './FilledLayers'
import { OutlineLayers } from './OutlineLayers'
import { RoundLayers } from './RoundLayers'
import { SharpLayers } from './SharpLayers'
import { TwoToneLayers } from './TwoToneLayers'

export const Layers = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLayers, OutlineLayers, RoundLayers, SharpLayers, TwoToneLayers)
