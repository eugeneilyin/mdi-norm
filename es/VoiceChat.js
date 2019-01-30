import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVoiceChat } from './FilledVoiceChat';
import { OutlineVoiceChat } from './OutlineVoiceChat';
import { RoundVoiceChat } from './RoundVoiceChat';
import { SharpVoiceChat } from './SharpVoiceChat';
import { TwoToneVoiceChat } from './TwoToneVoiceChat';
export var VoiceChat =
/*#__PURE__*/
function VoiceChat(props) {
  return createThemedIcon(props, FilledVoiceChat, OutlineVoiceChat, RoundVoiceChat, SharpVoiceChat, TwoToneVoiceChat);
};