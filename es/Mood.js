import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMood } from './FilledMood';
import { OutlineMood } from './OutlineMood';
import { RoundMood } from './RoundMood';
import { SharpMood } from './SharpMood';
import { TwoToneMood } from './TwoToneMood';
export var Mood =
/*#__PURE__*/
function Mood(props) {
  return createThemedIcon(props, FilledMood, OutlineMood, RoundMood, SharpMood, TwoToneMood);
};