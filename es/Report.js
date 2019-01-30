import { createThemedIcon } from './utils/createThemedIcon';
import { FilledReport } from './FilledReport';
import { OutlineReport } from './OutlineReport';
import { RoundReport } from './RoundReport';
import { SharpReport } from './SharpReport';
import { TwoToneReport } from './TwoToneReport';
export var Report =
/*#__PURE__*/
function Report(props) {
  return createThemedIcon(props, FilledReport, OutlineReport, RoundReport, SharpReport, TwoToneReport);
};