import { createThemedIcon } from './utils/createThemedIcon';
import { FilledUndo } from './FilledUndo';
import { OutlineUndo } from './OutlineUndo';
import { RoundUndo } from './RoundUndo';
import { SharpUndo } from './SharpUndo';
import { TwoToneUndo } from './TwoToneUndo';
export var Undo =
/*#__PURE__*/
function Undo(props) {
  return createThemedIcon(props, FilledUndo, OutlineUndo, RoundUndo, SharpUndo, TwoToneUndo);
};