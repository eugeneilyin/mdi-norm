import { createThemedIcon } from './utils/createThemedIcon';
import { FilledQueuePlayNext } from './FilledQueuePlayNext';
import { OutlineQueuePlayNext } from './OutlineQueuePlayNext';
import { RoundQueuePlayNext } from './RoundQueuePlayNext';
import { SharpQueuePlayNext } from './SharpQueuePlayNext';
import { TwoToneQueuePlayNext } from './TwoToneQueuePlayNext';
export var QueuePlayNext =
/*#__PURE__*/
function QueuePlayNext(props) {
  return createThemedIcon(props, FilledQueuePlayNext, OutlineQueuePlayNext, RoundQueuePlayNext, SharpQueuePlayNext, TwoToneQueuePlayNext);
};