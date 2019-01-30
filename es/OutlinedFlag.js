import { createThemedIcon } from './utils/createThemedIcon';
import { FilledOutlinedFlag } from './FilledOutlinedFlag';
import { OutlineOutlinedFlag } from './OutlineOutlinedFlag';
import { RoundOutlinedFlag } from './RoundOutlinedFlag';
import { SharpOutlinedFlag } from './SharpOutlinedFlag';
import { TwoToneOutlinedFlag } from './TwoToneOutlinedFlag';
export var OutlinedFlag =
/*#__PURE__*/
function OutlinedFlag(props) {
  return createThemedIcon(props, FilledOutlinedFlag, OutlineOutlinedFlag, RoundOutlinedFlag, SharpOutlinedFlag, TwoToneOutlinedFlag);
};