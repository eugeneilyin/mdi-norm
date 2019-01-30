import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNetworkLocked } from './FilledNetworkLocked';
import { OutlineNetworkLocked } from './OutlineNetworkLocked';
import { RoundNetworkLocked } from './RoundNetworkLocked';
import { SharpNetworkLocked } from './SharpNetworkLocked';
import { TwoToneNetworkLocked } from './TwoToneNetworkLocked';
export var NetworkLocked =
/*#__PURE__*/
function NetworkLocked(props) {
  return createThemedIcon(props, FilledNetworkLocked, OutlineNetworkLocked, RoundNetworkLocked, SharpNetworkLocked, TwoToneNetworkLocked);
};