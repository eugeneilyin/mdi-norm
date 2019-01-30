import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFilterList } from './FilledFilterList';
import { OutlineFilterList } from './OutlineFilterList';
import { RoundFilterList } from './RoundFilterList';
import { SharpFilterList } from './SharpFilterList';
import { TwoToneFilterList } from './TwoToneFilterList';
export var FilterList =
/*#__PURE__*/
function FilterList(props) {
  return createThemedIcon(props, FilledFilterList, OutlineFilterList, RoundFilterList, SharpFilterList, TwoToneFilterList);
};