import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGroupAdd } from './FilledGroupAdd';
import { OutlineGroupAdd } from './OutlineGroupAdd';
import { RoundGroupAdd } from './RoundGroupAdd';
import { SharpGroupAdd } from './SharpGroupAdd';
import { TwoToneGroupAdd } from './TwoToneGroupAdd';
export var GroupAdd =
/*#__PURE__*/
function GroupAdd(props) {
  return createThemedIcon(props, FilledGroupAdd, OutlineGroupAdd, RoundGroupAdd, SharpGroupAdd, TwoToneGroupAdd);
};