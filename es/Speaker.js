import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSpeaker } from './FilledSpeaker';
import { OutlineSpeaker } from './OutlineSpeaker';
import { RoundSpeaker } from './RoundSpeaker';
import { SharpSpeaker } from './SharpSpeaker';
import { TwoToneSpeaker } from './TwoToneSpeaker';
export var Speaker =
/*#__PURE__*/
function Speaker(props) {
  return createThemedIcon(props, FilledSpeaker, OutlineSpeaker, RoundSpeaker, SharpSpeaker, TwoToneSpeaker);
};