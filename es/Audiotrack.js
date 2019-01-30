import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAudiotrack } from './FilledAudiotrack';
import { OutlineAudiotrack } from './OutlineAudiotrack';
import { RoundAudiotrack } from './RoundAudiotrack';
import { SharpAudiotrack } from './SharpAudiotrack';
import { TwoToneAudiotrack } from './TwoToneAudiotrack';
export var Audiotrack =
/*#__PURE__*/
function Audiotrack(props) {
  return createThemedIcon(props, FilledAudiotrack, OutlineAudiotrack, RoundAudiotrack, SharpAudiotrack, TwoToneAudiotrack);
};