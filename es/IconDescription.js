import { createThemedIcon } from './utils/createThemedIcon';
import { IconDescriptionFilled } from './IconDescriptionFilled';
import { IconDescriptionOutlined } from './IconDescriptionOutlined';
import { IconDescriptionRounded } from './IconDescriptionRounded';
import { IconDescriptionSharp } from './IconDescriptionSharp';
import { IconDescriptionTwoTone } from './IconDescriptionTwoTone';
export var IconDescription =
/*#__PURE__*/
function IconDescription(props) {
  return createThemedIcon(props, IconDescriptionFilled, IconDescriptionOutlined, IconDescriptionRounded, IconDescriptionSharp, IconDescriptionTwoTone);
};