import { createThemedIcon } from './utils/createThemedIcon';
import { FilledQueue } from './FilledQueue';
import { OutlineQueue } from './OutlineQueue';
import { RoundQueue } from './RoundQueue';
import { SharpQueue } from './SharpQueue';
import { TwoToneQueue } from './TwoToneQueue';
export var Queue =
/*#__PURE__*/
function Queue(props) {
  return createThemedIcon(props, FilledQueue, OutlineQueue, RoundQueue, SharpQueue, TwoToneQueue);
};