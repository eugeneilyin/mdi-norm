import { createThemedIcon } from './utils/createThemedIcon';
import { IconOpacityFilled } from './IconOpacityFilled';
import { IconOpacityOutlined } from './IconOpacityOutlined';
import { IconOpacityRounded } from './IconOpacityRounded';
import { IconOpacitySharp } from './IconOpacitySharp';
import { IconOpacityTwoTone } from './IconOpacityTwoTone';
export var IconOpacity =
/*#__PURE__*/
function IconOpacity(props) {
  return createThemedIcon(props, IconOpacityFilled, IconOpacityOutlined, IconOpacityRounded, IconOpacitySharp, IconOpacityTwoTone);
};