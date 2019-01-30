import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalCellular1Bar } from './FilledSignalCellular1Bar'
import { OutlineSignalCellular1Bar } from './OutlineSignalCellular1Bar'
import { RoundSignalCellular1Bar } from './RoundSignalCellular1Bar'
import { SharpSignalCellular1Bar } from './SharpSignalCellular1Bar'
import { TwoToneSignalCellular1Bar } from './TwoToneSignalCellular1Bar'

export const SignalCellular1Bar = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalCellular1Bar, OutlineSignalCellular1Bar, RoundSignalCellular1Bar, SharpSignalCellular1Bar, TwoToneSignalCellular1Bar)
