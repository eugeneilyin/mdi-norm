import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWarning } from './FilledWarning';
import { OutlineWarning } from './OutlineWarning';
import { RoundWarning } from './RoundWarning';
import { SharpWarning } from './SharpWarning';
import { TwoToneWarning } from './TwoToneWarning';
export var Warning =
/*#__PURE__*/
function Warning(props) {
  return createThemedIcon(props, FilledWarning, OutlineWarning, RoundWarning, SharpWarning, TwoToneWarning);
};