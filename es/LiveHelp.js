import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLiveHelp } from './FilledLiveHelp';
import { OutlineLiveHelp } from './OutlineLiveHelp';
import { RoundLiveHelp } from './RoundLiveHelp';
import { SharpLiveHelp } from './SharpLiveHelp';
import { TwoToneLiveHelp } from './TwoToneLiveHelp';
export var LiveHelp =
/*#__PURE__*/
function LiveHelp(props) {
  return createThemedIcon(props, FilledLiveHelp, OutlineLiveHelp, RoundLiveHelp, SharpLiveHelp, TwoToneLiveHelp);
};