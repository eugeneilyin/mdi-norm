import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVerticalSplit } from './FilledVerticalSplit';
import { OutlineVerticalSplit } from './OutlineVerticalSplit';
import { RoundVerticalSplit } from './RoundVerticalSplit';
import { SharpVerticalSplit } from './SharpVerticalSplit';
import { TwoToneVerticalSplit } from './TwoToneVerticalSplit';
export var VerticalSplit =
/*#__PURE__*/
function VerticalSplit(props) {
  return createThemedIcon(props, FilledVerticalSplit, OutlineVerticalSplit, RoundVerticalSplit, SharpVerticalSplit, TwoToneVerticalSplit);
};