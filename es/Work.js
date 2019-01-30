import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWork } from './FilledWork';
import { OutlineWork } from './OutlineWork';
import { RoundWork } from './RoundWork';
import { SharpWork } from './SharpWork';
import { TwoToneWork } from './TwoToneWork';
export var Work =
/*#__PURE__*/
function Work(props) {
  return createThemedIcon(props, FilledWork, OutlineWork, RoundWork, SharpWork, TwoToneWork);
};