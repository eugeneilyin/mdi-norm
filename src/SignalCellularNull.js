import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalCellularNull } from './FilledSignalCellularNull'
import { OutlineSignalCellularNull } from './OutlineSignalCellularNull'
import { RoundSignalCellularNull } from './RoundSignalCellularNull'
import { SharpSignalCellularNull } from './SharpSignalCellularNull'
import { TwoToneSignalCellularNull } from './TwoToneSignalCellularNull'

export const SignalCellularNull = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalCellularNull, OutlineSignalCellularNull, RoundSignalCellularNull, SharpSignalCellularNull, TwoToneSignalCellularNull)
