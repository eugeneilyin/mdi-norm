import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalCellular3Bar } from './FilledSignalCellular3Bar'
import { OutlineSignalCellular3Bar } from './OutlineSignalCellular3Bar'
import { RoundSignalCellular3Bar } from './RoundSignalCellular3Bar'
import { SharpSignalCellular3Bar } from './SharpSignalCellular3Bar'
import { TwoToneSignalCellular3Bar } from './TwoToneSignalCellular3Bar'

export const SignalCellular3Bar = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalCellular3Bar, OutlineSignalCellular3Bar, RoundSignalCellular3Bar, SharpSignalCellular3Bar, TwoToneSignalCellular3Bar)
