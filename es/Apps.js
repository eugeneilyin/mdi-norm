import { createThemedIcon } from './utils/createThemedIcon';
import { FilledApps } from './FilledApps';
import { OutlineApps } from './OutlineApps';
import { RoundApps } from './RoundApps';
import { SharpApps } from './SharpApps';
import { TwoToneApps } from './TwoToneApps';
export var Apps =
/*#__PURE__*/
function Apps(props) {
  return createThemedIcon(props, FilledApps, OutlineApps, RoundApps, SharpApps, TwoToneApps);
};