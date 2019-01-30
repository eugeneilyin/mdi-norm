import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWifiTethering } from './FilledWifiTethering';
import { OutlineWifiTethering } from './OutlineWifiTethering';
import { RoundWifiTethering } from './RoundWifiTethering';
import { SharpWifiTethering } from './SharpWifiTethering';
import { TwoToneWifiTethering } from './TwoToneWifiTethering';
export var WifiTethering =
/*#__PURE__*/
function WifiTethering(props) {
  return createThemedIcon(props, FilledWifiTethering, OutlineWifiTethering, RoundWifiTethering, SharpWifiTethering, TwoToneWifiTethering);
};