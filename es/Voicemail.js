import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVoicemail } from './FilledVoicemail';
import { OutlineVoicemail } from './OutlineVoicemail';
import { RoundVoicemail } from './RoundVoicemail';
import { SharpVoicemail } from './SharpVoicemail';
import { TwoToneVoicemail } from './TwoToneVoicemail';
export var Voicemail =
/*#__PURE__*/
function Voicemail(props) {
  return createThemedIcon(props, FilledVoicemail, OutlineVoicemail, RoundVoicemail, SharpVoicemail, TwoToneVoicemail);
};