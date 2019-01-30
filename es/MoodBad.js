import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMoodBad } from './FilledMoodBad';
import { OutlineMoodBad } from './OutlineMoodBad';
import { RoundMoodBad } from './RoundMoodBad';
import { SharpMoodBad } from './SharpMoodBad';
import { TwoToneMoodBad } from './TwoToneMoodBad';
export var MoodBad =
/*#__PURE__*/
function MoodBad(props) {
  return createThemedIcon(props, FilledMoodBad, OutlineMoodBad, RoundMoodBad, SharpMoodBad, TwoToneMoodBad);
};