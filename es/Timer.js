import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTimer } from './FilledTimer';
import { OutlineTimer } from './OutlineTimer';
import { RoundTimer } from './RoundTimer';
import { SharpTimer } from './SharpTimer';
import { TwoToneTimer } from './TwoToneTimer';
export var Timer =
/*#__PURE__*/
function Timer(props) {
  return createThemedIcon(props, FilledTimer, OutlineTimer, RoundTimer, SharpTimer, TwoToneTimer);
};