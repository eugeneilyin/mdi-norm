import { createThemedIcon } from './utils/createThemedIcon';
import { FilledReportProblem } from './FilledReportProblem';
import { OutlineReportProblem } from './OutlineReportProblem';
import { RoundReportProblem } from './RoundReportProblem';
import { SharpReportProblem } from './SharpReportProblem';
import { TwoToneReportProblem } from './TwoToneReportProblem';
export var ReportProblem =
/*#__PURE__*/
function ReportProblem(props) {
  return createThemedIcon(props, FilledReportProblem, OutlineReportProblem, RoundReportProblem, SharpReportProblem, TwoToneReportProblem);
};