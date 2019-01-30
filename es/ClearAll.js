import { createThemedIcon } from './utils/createThemedIcon';
import { FilledClearAll } from './FilledClearAll';
import { OutlineClearAll } from './OutlineClearAll';
import { RoundClearAll } from './RoundClearAll';
import { SharpClearAll } from './SharpClearAll';
import { TwoToneClearAll } from './TwoToneClearAll';
export var ClearAll =
/*#__PURE__*/
function ClearAll(props) {
  return createThemedIcon(props, FilledClearAll, OutlineClearAll, RoundClearAll, SharpClearAll, TwoToneClearAll);
};