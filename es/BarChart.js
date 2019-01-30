import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBarChart } from './FilledBarChart';
import { OutlineBarChart } from './OutlineBarChart';
import { RoundBarChart } from './RoundBarChart';
import { SharpBarChart } from './SharpBarChart';
import { TwoToneBarChart } from './TwoToneBarChart';
export var BarChart =
/*#__PURE__*/
function BarChart(props) {
  return createThemedIcon(props, FilledBarChart, OutlineBarChart, RoundBarChart, SharpBarChart, TwoToneBarChart);
};