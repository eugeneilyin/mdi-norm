import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWifiLock } from './FilledWifiLock';
import { OutlineWifiLock } from './OutlineWifiLock';
import { RoundWifiLock } from './RoundWifiLock';
import { SharpWifiLock } from './SharpWifiLock';
import { TwoToneWifiLock } from './TwoToneWifiLock';
export var WifiLock =
/*#__PURE__*/
function WifiLock(props) {
  return createThemedIcon(props, FilledWifiLock, OutlineWifiLock, RoundWifiLock, SharpWifiLock, TwoToneWifiLock);
};