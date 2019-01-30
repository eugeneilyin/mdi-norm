import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSpeakerPhone } from './FilledSpeakerPhone';
import { OutlineSpeakerPhone } from './OutlineSpeakerPhone';
import { RoundSpeakerPhone } from './RoundSpeakerPhone';
import { SharpSpeakerPhone } from './SharpSpeakerPhone';
import { TwoToneSpeakerPhone } from './TwoToneSpeakerPhone';
export var SpeakerPhone =
/*#__PURE__*/
function SpeakerPhone(props) {
  return createThemedIcon(props, FilledSpeakerPhone, OutlineSpeakerPhone, RoundSpeakerPhone, SharpSpeakerPhone, TwoToneSpeakerPhone);
};