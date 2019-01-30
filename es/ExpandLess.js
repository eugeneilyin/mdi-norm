import { createThemedIcon } from './utils/createThemedIcon';
import { FilledExpandLess } from './FilledExpandLess';
import { OutlineExpandLess } from './OutlineExpandLess';
import { RoundExpandLess } from './RoundExpandLess';
import { SharpExpandLess } from './SharpExpandLess';
import { TwoToneExpandLess } from './TwoToneExpandLess';
export var ExpandLess =
/*#__PURE__*/
function ExpandLess(props) {
  return createThemedIcon(props, FilledExpandLess, OutlineExpandLess, RoundExpandLess, SharpExpandLess, TwoToneExpandLess);
};