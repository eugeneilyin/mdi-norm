import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNetworkCheck } from './FilledNetworkCheck';
import { OutlineNetworkCheck } from './OutlineNetworkCheck';
import { RoundNetworkCheck } from './RoundNetworkCheck';
import { SharpNetworkCheck } from './SharpNetworkCheck';
import { TwoToneNetworkCheck } from './TwoToneNetworkCheck';
export var NetworkCheck =
/*#__PURE__*/
function NetworkCheck(props) {
  return createThemedIcon(props, FilledNetworkCheck, OutlineNetworkCheck, RoundNetworkCheck, SharpNetworkCheck, TwoToneNetworkCheck);
};