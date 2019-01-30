import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVisibility } from './FilledVisibility';
import { OutlineVisibility } from './OutlineVisibility';
import { RoundVisibility } from './RoundVisibility';
import { SharpVisibility } from './SharpVisibility';
import { TwoToneVisibility } from './TwoToneVisibility';
export var Visibility =
/*#__PURE__*/
function Visibility(props) {
  return createThemedIcon(props, FilledVisibility, OutlineVisibility, RoundVisibility, SharpVisibility, TwoToneVisibility);
};