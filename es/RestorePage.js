import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRestorePage } from './FilledRestorePage';
import { OutlineRestorePage } from './OutlineRestorePage';
import { RoundRestorePage } from './RoundRestorePage';
import { SharpRestorePage } from './SharpRestorePage';
import { TwoToneRestorePage } from './TwoToneRestorePage';
export var RestorePage =
/*#__PURE__*/
function RestorePage(props) {
  return createThemedIcon(props, FilledRestorePage, OutlineRestorePage, RoundRestorePage, SharpRestorePage, TwoToneRestorePage);
};