import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewComfy } from './FilledViewComfy';
import { OutlineViewComfy } from './OutlineViewComfy';
import { RoundViewComfy } from './RoundViewComfy';
import { SharpViewComfy } from './SharpViewComfy';
import { TwoToneViewComfy } from './TwoToneViewComfy';
export var ViewComfy =
/*#__PURE__*/
function ViewComfy(props) {
  return createThemedIcon(props, FilledViewComfy, OutlineViewComfy, RoundViewComfy, SharpViewComfy, TwoToneViewComfy);
};