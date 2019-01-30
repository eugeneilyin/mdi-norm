import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWatchLater } from './FilledWatchLater';
import { OutlineWatchLater } from './OutlineWatchLater';
import { RoundWatchLater } from './RoundWatchLater';
import { SharpWatchLater } from './SharpWatchLater';
import { TwoToneWatchLater } from './TwoToneWatchLater';
export var WatchLater =
/*#__PURE__*/
function WatchLater(props) {
  return createThemedIcon(props, FilledWatchLater, OutlineWatchLater, RoundWatchLater, SharpWatchLater, TwoToneWatchLater);
};