import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalCellularAlt } from './FilledSignalCellularAlt'
import { OutlineSignalCellularAlt } from './OutlineSignalCellularAlt'
import { RoundSignalCellularAlt } from './RoundSignalCellularAlt'
import { SharpSignalCellularAlt } from './SharpSignalCellularAlt'
import { TwoToneSignalCellularAlt } from './TwoToneSignalCellularAlt'

export const SignalCellularAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalCellularAlt, OutlineSignalCellularAlt, RoundSignalCellularAlt, SharpSignalCellularAlt, TwoToneSignalCellularAlt)
