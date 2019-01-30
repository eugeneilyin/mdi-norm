import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMenu } from './FilledMenu';
import { OutlineMenu } from './OutlineMenu';
import { RoundMenu } from './RoundMenu';
import { SharpMenu } from './SharpMenu';
import { TwoToneMenu } from './TwoToneMenu';
export var Menu =
/*#__PURE__*/
function Menu(props) {
  return createThemedIcon(props, FilledMenu, OutlineMenu, RoundMenu, SharpMenu, TwoToneMenu);
};