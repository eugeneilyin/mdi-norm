import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDashboard } from './FilledDashboard';
import { OutlineDashboard } from './OutlineDashboard';
import { RoundDashboard } from './RoundDashboard';
import { SharpDashboard } from './SharpDashboard';
import { TwoToneDashboard } from './TwoToneDashboard';
export var Dashboard =
/*#__PURE__*/
function Dashboard(props) {
  return createThemedIcon(props, FilledDashboard, OutlineDashboard, RoundDashboard, SharpDashboard, TwoToneDashboard);
};