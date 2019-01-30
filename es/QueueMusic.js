import { createThemedIcon } from './utils/createThemedIcon';
import { FilledQueueMusic } from './FilledQueueMusic';
import { OutlineQueueMusic } from './OutlineQueueMusic';
import { RoundQueueMusic } from './RoundQueueMusic';
import { SharpQueueMusic } from './SharpQueueMusic';
import { TwoToneQueueMusic } from './TwoToneQueueMusic';
export var QueueMusic =
/*#__PURE__*/
function QueueMusic(props) {
  return createThemedIcon(props, FilledQueueMusic, OutlineQueueMusic, RoundQueueMusic, SharpQueueMusic, TwoToneQueueMusic);
};