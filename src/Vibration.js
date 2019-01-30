import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVibration } from './FilledVibration'
import { OutlineVibration } from './OutlineVibration'
import { RoundVibration } from './RoundVibration'
import { SharpVibration } from './SharpVibration'
import { TwoToneVibration } from './TwoToneVibration'

export const Vibration = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVibration, OutlineVibration, RoundVibration, SharpVibration, TwoToneVibration)
