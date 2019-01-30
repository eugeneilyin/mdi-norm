import { createThemedIcon } from './utils/createThemedIcon';
import { FilledShuffle } from './FilledShuffle';
import { OutlineShuffle } from './OutlineShuffle';
import { RoundShuffle } from './RoundShuffle';
import { SharpShuffle } from './SharpShuffle';
import { TwoToneShuffle } from './TwoToneShuffle';
export var Shuffle =
/*#__PURE__*/
function Shuffle(props) {
  return createThemedIcon(props, FilledShuffle, OutlineShuffle, RoundShuffle, SharpShuffle, TwoToneShuffle);
};