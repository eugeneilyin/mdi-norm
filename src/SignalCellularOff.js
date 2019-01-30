import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalCellularOff } from './FilledSignalCellularOff'
import { OutlineSignalCellularOff } from './OutlineSignalCellularOff'
import { RoundSignalCellularOff } from './RoundSignalCellularOff'
import { SharpSignalCellularOff } from './SharpSignalCellularOff'
import { TwoToneSignalCellularOff } from './TwoToneSignalCellularOff'

export const SignalCellularOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalCellularOff, OutlineSignalCellularOff, RoundSignalCellularOff, SharpSignalCellularOff, TwoToneSignalCellularOff)
