import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLowPriority } from './FilledLowPriority';
import { OutlineLowPriority } from './OutlineLowPriority';
import { RoundLowPriority } from './RoundLowPriority';
import { SharpLowPriority } from './SharpLowPriority';
import { TwoToneLowPriority } from './TwoToneLowPriority';
export var LowPriority =
/*#__PURE__*/
function LowPriority(props) {
  return createThemedIcon(props, FilledLowPriority, OutlineLowPriority, RoundLowPriority, SharpLowPriority, TwoToneLowPriority);
};