import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTableChart } from './FilledTableChart';
import { OutlineTableChart } from './OutlineTableChart';
import { RoundTableChart } from './RoundTableChart';
import { SharpTableChart } from './SharpTableChart';
import { TwoToneTableChart } from './TwoToneTableChart';
export var TableChart =
/*#__PURE__*/
function TableChart(props) {
  return createThemedIcon(props, FilledTableChart, OutlineTableChart, RoundTableChart, SharpTableChart, TwoToneTableChart);
};