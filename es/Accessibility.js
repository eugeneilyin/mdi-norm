import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAccessibility } from './FilledAccessibility';
import { OutlineAccessibility } from './OutlineAccessibility';
import { RoundAccessibility } from './RoundAccessibility';
import { SharpAccessibility } from './SharpAccessibility';
import { TwoToneAccessibility } from './TwoToneAccessibility';
export var Accessibility =
/*#__PURE__*/
function Accessibility(props) {
  return createThemedIcon(props, FilledAccessibility, OutlineAccessibility, RoundAccessibility, SharpAccessibility, TwoToneAccessibility);
};