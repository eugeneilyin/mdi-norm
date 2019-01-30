import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDateRange } from './FilledDateRange';
import { OutlineDateRange } from './OutlineDateRange';
import { RoundDateRange } from './RoundDateRange';
import { SharpDateRange } from './SharpDateRange';
import { TwoToneDateRange } from './TwoToneDateRange';
export var DateRange =
/*#__PURE__*/
function DateRange(props) {
  return createThemedIcon(props, FilledDateRange, OutlineDateRange, RoundDateRange, SharpDateRange, TwoToneDateRange);
};