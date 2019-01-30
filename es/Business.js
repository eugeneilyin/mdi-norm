import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBusiness } from './FilledBusiness';
import { OutlineBusiness } from './OutlineBusiness';
import { RoundBusiness } from './RoundBusiness';
import { SharpBusiness } from './SharpBusiness';
import { TwoToneBusiness } from './TwoToneBusiness';
export var Business =
/*#__PURE__*/
function Business(props) {
  return createThemedIcon(props, FilledBusiness, OutlineBusiness, RoundBusiness, SharpBusiness, TwoToneBusiness);
};