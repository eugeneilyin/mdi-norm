import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBrightnessLow } from './FilledBrightnessLow'
import { OutlineBrightnessLow } from './OutlineBrightnessLow'
import { RoundBrightnessLow } from './RoundBrightnessLow'
import { SharpBrightnessLow } from './SharpBrightnessLow'
import { TwoToneBrightnessLow } from './TwoToneBrightnessLow'

export const BrightnessLow = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBrightnessLow, OutlineBrightnessLow, RoundBrightnessLow, SharpBrightnessLow, TwoToneBrightnessLow)
