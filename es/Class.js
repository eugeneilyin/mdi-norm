import { createThemedIcon } from './utils/createThemedIcon';
import { FilledClass } from './FilledClass';
import { OutlineClass } from './OutlineClass';
import { RoundClass } from './RoundClass';
import { SharpClass } from './SharpClass';
import { TwoToneClass } from './TwoToneClass';
export var Class =
/*#__PURE__*/
function Class(props) {
  return createThemedIcon(props, FilledClass, OutlineClass, RoundClass, SharpClass, TwoToneClass);
};