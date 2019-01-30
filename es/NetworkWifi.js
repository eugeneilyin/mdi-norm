import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNetworkWifi } from './FilledNetworkWifi';
import { OutlineNetworkWifi } from './OutlineNetworkWifi';
import { RoundNetworkWifi } from './RoundNetworkWifi';
import { SharpNetworkWifi } from './SharpNetworkWifi';
import { TwoToneNetworkWifi } from './TwoToneNetworkWifi';
export var NetworkWifi =
/*#__PURE__*/
function NetworkWifi(props) {
  return createThemedIcon(props, FilledNetworkWifi, OutlineNetworkWifi, RoundNetworkWifi, SharpNetworkWifi, TwoToneNetworkWifi);
};