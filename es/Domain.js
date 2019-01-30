import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDomain } from './FilledDomain';
import { OutlineDomain } from './OutlineDomain';
import { RoundDomain } from './RoundDomain';
import { SharpDomain } from './SharpDomain';
import { TwoToneDomain } from './TwoToneDomain';
export var Domain =
/*#__PURE__*/
function Domain(props) {
  return createThemedIcon(props, FilledDomain, OutlineDomain, RoundDomain, SharpDomain, TwoToneDomain);
};