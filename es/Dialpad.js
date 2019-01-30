import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDialpad } from './FilledDialpad';
import { OutlineDialpad } from './OutlineDialpad';
import { RoundDialpad } from './RoundDialpad';
import { SharpDialpad } from './SharpDialpad';
import { TwoToneDialpad } from './TwoToneDialpad';
export var Dialpad =
/*#__PURE__*/
function Dialpad(props) {
  return createThemedIcon(props, FilledDialpad, OutlineDialpad, RoundDialpad, SharpDialpad, TwoToneDialpad);
};