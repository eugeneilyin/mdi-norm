import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBubbleChart } from './FilledBubbleChart';
import { OutlineBubbleChart } from './OutlineBubbleChart';
import { RoundBubbleChart } from './RoundBubbleChart';
import { SharpBubbleChart } from './SharpBubbleChart';
import { TwoToneBubbleChart } from './TwoToneBubbleChart';
export var BubbleChart =
/*#__PURE__*/
function BubbleChart(props) {
  return createThemedIcon(props, FilledBubbleChart, OutlineBubbleChart, RoundBubbleChart, SharpBubbleChart, TwoToneBubbleChart);
};