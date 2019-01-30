import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewList } from './FilledViewList';
import { OutlineViewList } from './OutlineViewList';
import { RoundViewList } from './RoundViewList';
import { SharpViewList } from './SharpViewList';
import { TwoToneViewList } from './TwoToneViewList';
export var ViewList =
/*#__PURE__*/
function ViewList(props) {
  return createThemedIcon(props, FilledViewList, OutlineViewList, RoundViewList, SharpViewList, TwoToneViewList);
};