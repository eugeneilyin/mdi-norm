import { createThemedIcon } from './utils/createThemedIcon'
import { FilledReportProblem } from './FilledReportProblem'
import { OutlineReportProblem } from './OutlineReportProblem'
import { RoundReportProblem } from './RoundReportProblem'
import { SharpReportProblem } from './SharpReportProblem'
import { TwoToneReportProblem } from './TwoToneReportProblem'

export const ReportProblem = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledReportProblem, OutlineReportProblem, RoundReportProblem, SharpReportProblem, TwoToneReportProblem)
