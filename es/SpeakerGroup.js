import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSpeakerGroup } from './FilledSpeakerGroup';
import { OutlineSpeakerGroup } from './OutlineSpeakerGroup';
import { RoundSpeakerGroup } from './RoundSpeakerGroup';
import { SharpSpeakerGroup } from './SharpSpeakerGroup';
import { TwoToneSpeakerGroup } from './TwoToneSpeakerGroup';
export var SpeakerGroup =
/*#__PURE__*/
function SpeakerGroup(props) {
  return createThemedIcon(props, FilledSpeakerGroup, OutlineSpeakerGroup, RoundSpeakerGroup, SharpSpeakerGroup, TwoToneSpeakerGroup);
};