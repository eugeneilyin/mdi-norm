import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewColumn } from './FilledViewColumn';
import { OutlineViewColumn } from './OutlineViewColumn';
import { RoundViewColumn } from './RoundViewColumn';
import { SharpViewColumn } from './SharpViewColumn';
import { TwoToneViewColumn } from './TwoToneViewColumn';
export var ViewColumn =
/*#__PURE__*/
function ViewColumn(props) {
  return createThemedIcon(props, FilledViewColumn, OutlineViewColumn, RoundViewColumn, SharpViewColumn, TwoToneViewColumn);
};