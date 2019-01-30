import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMobileFriendly } from './FilledMobileFriendly';
import { OutlineMobileFriendly } from './OutlineMobileFriendly';
import { RoundMobileFriendly } from './RoundMobileFriendly';
import { SharpMobileFriendly } from './SharpMobileFriendly';
import { TwoToneMobileFriendly } from './TwoToneMobileFriendly';
export var MobileFriendly =
/*#__PURE__*/
function MobileFriendly(props) {
  return createThemedIcon(props, FilledMobileFriendly, OutlineMobileFriendly, RoundMobileFriendly, SharpMobileFriendly, TwoToneMobileFriendly);
};