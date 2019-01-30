import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDepartureBoard } from './FilledDepartureBoard';
import { OutlineDepartureBoard } from './OutlineDepartureBoard';
import { RoundDepartureBoard } from './RoundDepartureBoard';
import { SharpDepartureBoard } from './SharpDepartureBoard';
import { TwoToneDepartureBoard } from './TwoToneDepartureBoard';
export var DepartureBoard =
/*#__PURE__*/
function DepartureBoard(props) {
  return createThemedIcon(props, FilledDepartureBoard, OutlineDepartureBoard, RoundDepartureBoard, SharpDepartureBoard, TwoToneDepartureBoard);
};