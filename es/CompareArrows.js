import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCompareArrows } from './FilledCompareArrows';
import { OutlineCompareArrows } from './OutlineCompareArrows';
import { RoundCompareArrows } from './RoundCompareArrows';
import { SharpCompareArrows } from './SharpCompareArrows';
import { TwoToneCompareArrows } from './TwoToneCompareArrows';
export var CompareArrows =
/*#__PURE__*/
function CompareArrows(props) {
  return createThemedIcon(props, FilledCompareArrows, OutlineCompareArrows, RoundCompareArrows, SharpCompareArrows, TwoToneCompareArrows);
};