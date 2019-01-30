import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPrint } from './FilledPrint'
import { OutlinePrint } from './OutlinePrint'
import { RoundPrint } from './RoundPrint'
import { SharpPrint } from './SharpPrint'
import { TwoTonePrint } from './TwoTonePrint'

export const Print = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPrint, OutlinePrint, RoundPrint, SharpPrint, TwoTonePrint)
