import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLoop } from './FilledLoop';
import { OutlineLoop } from './OutlineLoop';
import { RoundLoop } from './RoundLoop';
import { SharpLoop } from './SharpLoop';
import { TwoToneLoop } from './TwoToneLoop';
export var Loop =
/*#__PURE__*/
function Loop(props) {
  return createThemedIcon(props, FilledLoop, OutlineLoop, RoundLoop, SharpLoop, TwoToneLoop);
};