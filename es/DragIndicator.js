import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDragIndicator } from './FilledDragIndicator';
import { OutlineDragIndicator } from './OutlineDragIndicator';
import { RoundDragIndicator } from './RoundDragIndicator';
import { SharpDragIndicator } from './SharpDragIndicator';
import { TwoToneDragIndicator } from './TwoToneDragIndicator';
export var DragIndicator =
/*#__PURE__*/
function DragIndicator(props) {
  return createThemedIcon(props, FilledDragIndicator, OutlineDragIndicator, RoundDragIndicator, SharpDragIndicator, TwoToneDragIndicator);
};