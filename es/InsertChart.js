import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInsertChart } from './FilledInsertChart';
import { OutlineInsertChart } from './OutlineInsertChart';
import { RoundInsertChart } from './RoundInsertChart';
import { SharpInsertChart } from './SharpInsertChart';
import { TwoToneInsertChart } from './TwoToneInsertChart';
export var InsertChart =
/*#__PURE__*/
function InsertChart(props) {
  return createThemedIcon(props, FilledInsertChart, OutlineInsertChart, RoundInsertChart, SharpInsertChart, TwoToneInsertChart);
};