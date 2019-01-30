import { createThemedIcon } from './utils/createThemedIcon';
import { FilledList } from './FilledList';
import { OutlineList } from './OutlineList';
import { RoundList } from './RoundList';
import { SharpList } from './SharpList';
import { TwoToneList } from './TwoToneList';
export var List =
/*#__PURE__*/
function List(props) {
  return createThemedIcon(props, FilledList, OutlineList, RoundList, SharpList, TwoToneList);
};