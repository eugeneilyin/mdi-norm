import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDeveloperBoard } from './FilledDeveloperBoard';
import { OutlineDeveloperBoard } from './OutlineDeveloperBoard';
import { RoundDeveloperBoard } from './RoundDeveloperBoard';
import { SharpDeveloperBoard } from './SharpDeveloperBoard';
import { TwoToneDeveloperBoard } from './TwoToneDeveloperBoard';
export var DeveloperBoard =
/*#__PURE__*/
function DeveloperBoard(props) {
  return createThemedIcon(props, FilledDeveloperBoard, OutlineDeveloperBoard, RoundDeveloperBoard, SharpDeveloperBoard, TwoToneDeveloperBoard);
};