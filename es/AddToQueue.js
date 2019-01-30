import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddToQueue } from './FilledAddToQueue';
import { OutlineAddToQueue } from './OutlineAddToQueue';
import { RoundAddToQueue } from './RoundAddToQueue';
import { SharpAddToQueue } from './SharpAddToQueue';
import { TwoToneAddToQueue } from './TwoToneAddToQueue';
export var AddToQueue =
/*#__PURE__*/
function AddToQueue(props) {
  return createThemedIcon(props, FilledAddToQueue, OutlineAddToQueue, RoundAddToQueue, SharpAddToQueue, TwoToneAddToQueue);
};