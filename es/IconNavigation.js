import { createThemedIcon } from './utils/createThemedIcon';
import { IconNavigationFilled } from './IconNavigationFilled';
import { IconNavigationOutlined } from './IconNavigationOutlined';
import { IconNavigationRounded } from './IconNavigationRounded';
import { IconNavigationSharp } from './IconNavigationSharp';
import { IconNavigationTwoTone } from './IconNavigationTwoTone';
export var IconNavigation =
/*#__PURE__*/
function IconNavigation(props) {
  return createThemedIcon(props, IconNavigationFilled, IconNavigationOutlined, IconNavigationRounded, IconNavigationSharp, IconNavigationTwoTone);
};