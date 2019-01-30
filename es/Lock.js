import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLock } from './FilledLock';
import { OutlineLock } from './OutlineLock';
import { RoundLock } from './RoundLock';
import { SharpLock } from './SharpLock';
import { TwoToneLock } from './TwoToneLock';
export var Lock =
/*#__PURE__*/
function Lock(props) {
  return createThemedIcon(props, FilledLock, OutlineLock, RoundLock, SharpLock, TwoToneLock);
};