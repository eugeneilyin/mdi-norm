import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRecentActors } from './FilledRecentActors';
import { OutlineRecentActors } from './OutlineRecentActors';
import { RoundRecentActors } from './RoundRecentActors';
import { SharpRecentActors } from './SharpRecentActors';
import { TwoToneRecentActors } from './TwoToneRecentActors';
export var RecentActors =
/*#__PURE__*/
function RecentActors(props) {
  return createThemedIcon(props, FilledRecentActors, OutlineRecentActors, RoundRecentActors, SharpRecentActors, TwoToneRecentActors);
};