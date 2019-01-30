import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRedo } from './FilledRedo';
import { OutlineRedo } from './OutlineRedo';
import { RoundRedo } from './RoundRedo';
import { SharpRedo } from './SharpRedo';
import { TwoToneRedo } from './TwoToneRedo';
export var Redo =
/*#__PURE__*/
function Redo(props) {
  return createThemedIcon(props, FilledRedo, OutlineRedo, RoundRedo, SharpRedo, TwoToneRedo);
};