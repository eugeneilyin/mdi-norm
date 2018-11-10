import { createThemedIcon } from './utils/createThemedIcon';
import { IconGroupFilled } from './IconGroupFilled';
import { IconGroupOutlined } from './IconGroupOutlined';
import { IconGroupRounded } from './IconGroupRounded';
import { IconGroupSharp } from './IconGroupSharp';
import { IconGroupTwoTone } from './IconGroupTwoTone';
export var IconGroup =
/*#__PURE__*/
function IconGroup(props) {
  return createThemedIcon(props, IconGroupFilled, IconGroupOutlined, IconGroupRounded, IconGroupSharp, IconGroupTwoTone);
};