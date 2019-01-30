import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSwitchVideo } from './FilledSwitchVideo';
import { OutlineSwitchVideo } from './OutlineSwitchVideo';
import { RoundSwitchVideo } from './RoundSwitchVideo';
import { SharpSwitchVideo } from './SharpSwitchVideo';
import { TwoToneSwitchVideo } from './TwoToneSwitchVideo';
export var SwitchVideo =
/*#__PURE__*/
function SwitchVideo(props) {
  return createThemedIcon(props, FilledSwitchVideo, OutlineSwitchVideo, RoundSwitchVideo, SharpSwitchVideo, TwoToneSwitchVideo);
};