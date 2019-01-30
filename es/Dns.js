import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDns } from './FilledDns';
import { OutlineDns } from './OutlineDns';
import { RoundDns } from './RoundDns';
import { SharpDns } from './SharpDns';
import { TwoToneDns } from './TwoToneDns';
export var Dns =
/*#__PURE__*/
function Dns(props) {
  return createThemedIcon(props, FilledDns, OutlineDns, RoundDns, SharpDns, TwoToneDns);
};