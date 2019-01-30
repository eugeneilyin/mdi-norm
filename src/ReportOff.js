import { createThemedIcon } from './utils/createThemedIcon'
import { FilledReportOff } from './FilledReportOff'
import { OutlineReportOff } from './OutlineReportOff'
import { RoundReportOff } from './RoundReportOff'
import { SharpReportOff } from './SharpReportOff'
import { TwoToneReportOff } from './TwoToneReportOff'

export const ReportOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledReportOff, OutlineReportOff, RoundReportOff, SharpReportOff, TwoToneReportOff)
