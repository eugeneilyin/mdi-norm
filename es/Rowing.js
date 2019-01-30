import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRowing } from './FilledRowing';
import { OutlineRowing } from './OutlineRowing';
import { RoundRowing } from './RoundRowing';
import { SharpRowing } from './SharpRowing';
import { TwoToneRowing } from './TwoToneRowing';
export var Rowing =
/*#__PURE__*/
function Rowing(props) {
  return createThemedIcon(props, FilledRowing, OutlineRowing, RoundRowing, SharpRowing, TwoToneRowing);
};