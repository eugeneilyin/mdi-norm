import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAdd } from './FilledAdd';
import { OutlineAdd } from './OutlineAdd';
import { RoundAdd } from './RoundAdd';
import { SharpAdd } from './SharpAdd';
import { TwoToneAdd } from './TwoToneAdd';
export var Add =
/*#__PURE__*/
function Add(props) {
  return createThemedIcon(props, FilledAdd, OutlineAdd, RoundAdd, SharpAdd, TwoToneAdd);
};