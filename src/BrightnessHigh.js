import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBrightnessHigh } from './FilledBrightnessHigh'
import { OutlineBrightnessHigh } from './OutlineBrightnessHigh'
import { RoundBrightnessHigh } from './RoundBrightnessHigh'
import { SharpBrightnessHigh } from './SharpBrightnessHigh'
import { TwoToneBrightnessHigh } from './TwoToneBrightnessHigh'

export const BrightnessHigh = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBrightnessHigh, OutlineBrightnessHigh, RoundBrightnessHigh, SharpBrightnessHigh, TwoToneBrightnessHigh)
