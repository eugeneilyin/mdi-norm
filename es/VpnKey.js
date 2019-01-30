import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVpnKey } from './FilledVpnKey';
import { OutlineVpnKey } from './OutlineVpnKey';
import { RoundVpnKey } from './RoundVpnKey';
import { SharpVpnKey } from './SharpVpnKey';
import { TwoToneVpnKey } from './TwoToneVpnKey';
export var VpnKey =
/*#__PURE__*/
function VpnKey(props) {
  return createThemedIcon(props, FilledVpnKey, OutlineVpnKey, RoundVpnKey, SharpVpnKey, TwoToneVpnKey);
};