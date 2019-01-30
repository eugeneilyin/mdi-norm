import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVpnLock } from './FilledVpnLock';
import { OutlineVpnLock } from './OutlineVpnLock';
import { RoundVpnLock } from './RoundVpnLock';
import { SharpVpnLock } from './SharpVpnLock';
import { TwoToneVpnLock } from './TwoToneVpnLock';
export var VpnLock =
/*#__PURE__*/
function VpnLock(props) {
  return createThemedIcon(props, FilledVpnLock, OutlineVpnLock, RoundVpnLock, SharpVpnLock, TwoToneVpnLock);
};