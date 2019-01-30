import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRemoveFromQueue } from './FilledRemoveFromQueue';
import { OutlineRemoveFromQueue } from './OutlineRemoveFromQueue';
import { RoundRemoveFromQueue } from './RoundRemoveFromQueue';
import { SharpRemoveFromQueue } from './SharpRemoveFromQueue';
import { TwoToneRemoveFromQueue } from './TwoToneRemoveFromQueue';
export var RemoveFromQueue =
/*#__PURE__*/
function RemoveFromQueue(props) {
  return createThemedIcon(props, FilledRemoveFromQueue, OutlineRemoveFromQueue, RoundRemoveFromQueue, SharpRemoveFromQueue, TwoToneRemoveFromQueue);
};