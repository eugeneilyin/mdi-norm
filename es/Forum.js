import { createThemedIcon } from './utils/createThemedIcon';
import { FilledForum } from './FilledForum';
import { OutlineForum } from './OutlineForum';
import { RoundForum } from './RoundForum';
import { SharpForum } from './SharpForum';
import { TwoToneForum } from './TwoToneForum';
export var Forum =
/*#__PURE__*/
function Forum(props) {
  return createThemedIcon(props, FilledForum, OutlineForum, RoundForum, SharpForum, TwoToneForum);
};