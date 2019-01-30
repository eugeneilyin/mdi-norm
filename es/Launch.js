import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLaunch } from './FilledLaunch';
import { OutlineLaunch } from './OutlineLaunch';
import { RoundLaunch } from './RoundLaunch';
import { SharpLaunch } from './SharpLaunch';
import { TwoToneLaunch } from './TwoToneLaunch';
export var Launch =
/*#__PURE__*/
function Launch(props) {
  return createThemedIcon(props, FilledLaunch, OutlineLaunch, RoundLaunch, SharpLaunch, TwoToneLaunch);
};