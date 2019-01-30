import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPrintDisabled } from './FilledPrintDisabled'
import { OutlinePrintDisabled } from './OutlinePrintDisabled'
import { RoundPrintDisabled } from './RoundPrintDisabled'
import { SharpPrintDisabled } from './SharpPrintDisabled'
import { TwoTonePrintDisabled } from './TwoTonePrintDisabled'

export const PrintDisabled = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPrintDisabled, OutlinePrintDisabled, RoundPrintDisabled, SharpPrintDisabled, TwoTonePrintDisabled)
