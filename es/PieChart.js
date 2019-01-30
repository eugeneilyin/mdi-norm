import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPieChart } from './FilledPieChart';
import { OutlinePieChart } from './OutlinePieChart';
import { RoundPieChart } from './RoundPieChart';
import { SharpPieChart } from './SharpPieChart';
import { TwoTonePieChart } from './TwoTonePieChart';
export var PieChart =
/*#__PURE__*/
function PieChart(props) {
  return createThemedIcon(props, FilledPieChart, OutlinePieChart, RoundPieChart, SharpPieChart, TwoTonePieChart);
};