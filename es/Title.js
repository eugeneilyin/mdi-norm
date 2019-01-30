import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTitle } from './FilledTitle';
import { OutlineTitle } from './OutlineTitle';
import { RoundTitle } from './RoundTitle';
import { SharpTitle } from './SharpTitle';
import { TwoToneTitle } from './TwoToneTitle';
export var Title =
/*#__PURE__*/
function Title(props) {
  return createThemedIcon(props, FilledTitle, OutlineTitle, RoundTitle, SharpTitle, TwoToneTitle);
};