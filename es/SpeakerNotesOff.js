import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSpeakerNotesOff } from './FilledSpeakerNotesOff';
import { OutlineSpeakerNotesOff } from './OutlineSpeakerNotesOff';
import { RoundSpeakerNotesOff } from './RoundSpeakerNotesOff';
import { SharpSpeakerNotesOff } from './SharpSpeakerNotesOff';
import { TwoToneSpeakerNotesOff } from './TwoToneSpeakerNotesOff';
export var SpeakerNotesOff =
/*#__PURE__*/
function SpeakerNotesOff(props) {
  return createThemedIcon(props, FilledSpeakerNotesOff, OutlineSpeakerNotesOff, RoundSpeakerNotesOff, SharpSpeakerNotesOff, TwoToneSpeakerNotesOff);
};