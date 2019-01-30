import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewArray } from './FilledViewArray';
import { OutlineViewArray } from './OutlineViewArray';
import { RoundViewArray } from './RoundViewArray';
import { SharpViewArray } from './SharpViewArray';
import { TwoToneViewArray } from './TwoToneViewArray';
export var ViewArray =
/*#__PURE__*/
function ViewArray(props) {
  return createThemedIcon(props, FilledViewArray, OutlineViewArray, RoundViewArray, SharpViewArray, TwoToneViewArray);
};