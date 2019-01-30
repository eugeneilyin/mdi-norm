import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWifi } from './FilledWifi';
import { OutlineWifi } from './OutlineWifi';
import { RoundWifi } from './RoundWifi';
import { SharpWifi } from './SharpWifi';
import { TwoToneWifi } from './TwoToneWifi';
export var Wifi =
/*#__PURE__*/
function Wifi(props) {
  return createThemedIcon(props, FilledWifi, OutlineWifi, RoundWifi, SharpWifi, TwoToneWifi);
};