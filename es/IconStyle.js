import { createThemedIcon } from './utils/createThemedIcon';
import { IconStyleFilled } from './IconStyleFilled';
import { IconStyleOutlined } from './IconStyleOutlined';
import { IconStyleRounded } from './IconStyleRounded';
import { IconStyleSharp } from './IconStyleSharp';
import { IconStyleTwoTone } from './IconStyleTwoTone';
export var IconStyle =
/*#__PURE__*/
function IconStyle(props) {
  return createThemedIcon(props, IconStyleFilled, IconStyleOutlined, IconStyleRounded, IconStyleSharp, IconStyleTwoTone);
};