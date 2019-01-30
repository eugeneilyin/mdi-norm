import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBugReport } from './FilledBugReport';
import { OutlineBugReport } from './OutlineBugReport';
import { RoundBugReport } from './RoundBugReport';
import { SharpBugReport } from './SharpBugReport';
import { TwoToneBugReport } from './TwoToneBugReport';
export var BugReport =
/*#__PURE__*/
function BugReport(props) {
  return createThemedIcon(props, FilledBugReport, OutlineBugReport, RoundBugReport, SharpBugReport, TwoToneBugReport);
};