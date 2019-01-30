import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMultilineChart } from './FilledMultilineChart';
import { OutlineMultilineChart } from './OutlineMultilineChart';
import { RoundMultilineChart } from './RoundMultilineChart';
import { SharpMultilineChart } from './SharpMultilineChart';
import { TwoToneMultilineChart } from './TwoToneMultilineChart';
export var MultilineChart =
/*#__PURE__*/
function MultilineChart(props) {
  return createThemedIcon(props, FilledMultilineChart, OutlineMultilineChart, RoundMultilineChart, SharpMultilineChart, TwoToneMultilineChart);
};