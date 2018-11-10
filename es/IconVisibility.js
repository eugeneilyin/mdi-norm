import { createThemedIcon } from './utils/createThemedIcon';
import { IconVisibilityFilled } from './IconVisibilityFilled';
import { IconVisibilityOutlined } from './IconVisibilityOutlined';
import { IconVisibilityRounded } from './IconVisibilityRounded';
import { IconVisibilitySharp } from './IconVisibilitySharp';
import { IconVisibilityTwoTone } from './IconVisibilityTwoTone';
export var IconVisibility =
/*#__PURE__*/
function IconVisibility(props) {
  return createThemedIcon(props, IconVisibilityFilled, IconVisibilityOutlined, IconVisibilityRounded, IconVisibilitySharp, IconVisibilityTwoTone);
};