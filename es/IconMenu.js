import { createThemedIcon } from './utils/createThemedIcon';
import { IconMenuFilled } from './IconMenuFilled';
import { IconMenuOutlined } from './IconMenuOutlined';
import { IconMenuRounded } from './IconMenuRounded';
import { IconMenuSharp } from './IconMenuSharp';
import { IconMenuTwoTone } from './IconMenuTwoTone';
export var IconMenu =
/*#__PURE__*/
function IconMenu(props) {
  return createThemedIcon(props, IconMenuFilled, IconMenuOutlined, IconMenuRounded, IconMenuSharp, IconMenuTwoTone);
};