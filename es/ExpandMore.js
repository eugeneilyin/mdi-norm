import { createThemedIcon } from './utils/createThemedIcon';
import { FilledExpandMore } from './FilledExpandMore';
import { OutlineExpandMore } from './OutlineExpandMore';
import { RoundExpandMore } from './RoundExpandMore';
import { SharpExpandMore } from './SharpExpandMore';
import { TwoToneExpandMore } from './TwoToneExpandMore';
export var ExpandMore =
/*#__PURE__*/
function ExpandMore(props) {
  return createThemedIcon(props, FilledExpandMore, OutlineExpandMore, RoundExpandMore, SharpExpandMore, TwoToneExpandMore);
};