import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLayersClear } from './FilledLayersClear'
import { OutlineLayersClear } from './OutlineLayersClear'
import { RoundLayersClear } from './RoundLayersClear'
import { SharpLayersClear } from './SharpLayersClear'
import { TwoToneLayersClear } from './TwoToneLayersClear'

export const LayersClear = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLayersClear, OutlineLayersClear, RoundLayersClear, SharpLayersClear, TwoToneLayersClear)
