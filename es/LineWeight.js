import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLineWeight } from './FilledLineWeight';
import { OutlineLineWeight } from './OutlineLineWeight';
import { RoundLineWeight } from './RoundLineWeight';
import { SharpLineWeight } from './SharpLineWeight';
import { TwoToneLineWeight } from './TwoToneLineWeight';
export var LineWeight =
/*#__PURE__*/
function LineWeight(props) {
  return createThemedIcon(props, FilledLineWeight, OutlineLineWeight, RoundLineWeight, SharpLineWeight, TwoToneLineWeight);
};