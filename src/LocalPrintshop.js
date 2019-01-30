import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalPrintshop } from './FilledLocalPrintshop'
import { OutlineLocalPrintshop } from './OutlineLocalPrintshop'
import { RoundLocalPrintshop } from './RoundLocalPrintshop'
import { SharpLocalPrintshop } from './SharpLocalPrintshop'
import { TwoToneLocalPrintshop } from './TwoToneLocalPrintshop'

export const LocalPrintshop = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalPrintshop, OutlineLocalPrintshop, RoundLocalPrintshop, SharpLocalPrintshop, TwoToneLocalPrintshop)
