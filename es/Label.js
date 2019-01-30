import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLabel } from './FilledLabel';
import { OutlineLabel } from './OutlineLabel';
import { RoundLabel } from './RoundLabel';
import { SharpLabel } from './SharpLabel';
import { TwoToneLabel } from './TwoToneLabel';
export var Label =
/*#__PURE__*/
function Label(props) {
  return createThemedIcon(props, FilledLabel, OutlineLabel, RoundLabel, SharpLabel, TwoToneLabel);
};