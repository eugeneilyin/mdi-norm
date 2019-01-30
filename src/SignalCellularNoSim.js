import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalCellularNoSim } from './FilledSignalCellularNoSim'
import { OutlineSignalCellularNoSim } from './OutlineSignalCellularNoSim'
import { RoundSignalCellularNoSim } from './RoundSignalCellularNoSim'
import { SharpSignalCellularNoSim } from './SharpSignalCellularNoSim'
import { TwoToneSignalCellularNoSim } from './TwoToneSignalCellularNoSim'

export const SignalCellularNoSim = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalCellularNoSim, OutlineSignalCellularNoSim, RoundSignalCellularNoSim, SharpSignalCellularNoSim, TwoToneSignalCellularNoSim)
