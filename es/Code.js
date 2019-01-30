import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCode } from './FilledCode';
import { OutlineCode } from './OutlineCode';
import { RoundCode } from './RoundCode';
import { SharpCode } from './SharpCode';
import { TwoToneCode } from './TwoToneCode';
export var Code =
/*#__PURE__*/
function Code(props) {
  return createThemedIcon(props, FilledCode, OutlineCode, RoundCode, SharpCode, TwoToneCode);
};