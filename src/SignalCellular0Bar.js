import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalCellular0Bar } from './FilledSignalCellular0Bar'
import { OutlineSignalCellular0Bar } from './OutlineSignalCellular0Bar'
import { RoundSignalCellular0Bar } from './RoundSignalCellular0Bar'
import { SharpSignalCellular0Bar } from './SharpSignalCellular0Bar'
import { TwoToneSignalCellular0Bar } from './TwoToneSignalCellular0Bar'

export const SignalCellular0Bar = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalCellular0Bar, OutlineSignalCellular0Bar, RoundSignalCellular0Bar, SharpSignalCellular0Bar, TwoToneSignalCellular0Bar)
