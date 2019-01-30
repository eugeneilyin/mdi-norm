import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBrightnessAuto } from './FilledBrightnessAuto'
import { OutlineBrightnessAuto } from './OutlineBrightnessAuto'
import { RoundBrightnessAuto } from './RoundBrightnessAuto'
import { SharpBrightnessAuto } from './SharpBrightnessAuto'
import { TwoToneBrightnessAuto } from './TwoToneBrightnessAuto'

export const BrightnessAuto = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBrightnessAuto, OutlineBrightnessAuto, RoundBrightnessAuto, SharpBrightnessAuto, TwoToneBrightnessAuto)
