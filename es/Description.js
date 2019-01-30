import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDescription } from './FilledDescription';
import { OutlineDescription } from './OutlineDescription';
import { RoundDescription } from './RoundDescription';
import { SharpDescription } from './SharpDescription';
import { TwoToneDescription } from './TwoToneDescription';
export var Description =
/*#__PURE__*/
function Description(props) {
  return createThemedIcon(props, FilledDescription, OutlineDescription, RoundDescription, SharpDescription, TwoToneDescription);
};