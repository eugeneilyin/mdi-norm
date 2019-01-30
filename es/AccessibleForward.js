import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAccessibleForward } from './FilledAccessibleForward';
import { OutlineAccessibleForward } from './OutlineAccessibleForward';
import { RoundAccessibleForward } from './RoundAccessibleForward';
import { SharpAccessibleForward } from './SharpAccessibleForward';
import { TwoToneAccessibleForward } from './TwoToneAccessibleForward';
export var AccessibleForward =
/*#__PURE__*/
function AccessibleForward(props) {
  return createThemedIcon(props, FilledAccessibleForward, OutlineAccessibleForward, RoundAccessibleForward, SharpAccessibleForward, TwoToneAccessibleForward);
};