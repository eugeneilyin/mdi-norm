import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTune } from './FilledTune';
import { OutlineTune } from './OutlineTune';
import { RoundTune } from './RoundTune';
import { SharpTune } from './SharpTune';
import { TwoToneTune } from './TwoToneTune';
export var Tune =
/*#__PURE__*/
function Tune(props) {
  return createThemedIcon(props, FilledTune, OutlineTune, RoundTune, SharpTune, TwoToneTune);
};