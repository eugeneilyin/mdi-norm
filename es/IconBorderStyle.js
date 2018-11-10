import { createThemedIcon } from './utils/createThemedIcon';
import { IconBorderStyleFilled } from './IconBorderStyleFilled';
import { IconBorderStyleOutlined } from './IconBorderStyleOutlined';
import { IconBorderStyleRounded } from './IconBorderStyleRounded';
import { IconBorderStyleSharp } from './IconBorderStyleSharp';
import { IconBorderStyleTwoTone } from './IconBorderStyleTwoTone';
export var IconBorderStyle =
/*#__PURE__*/
function IconBorderStyle(props) {
  return createThemedIcon(props, IconBorderStyleFilled, IconBorderStyleOutlined, IconBorderStyleRounded, IconBorderStyleSharp, IconBorderStyleTwoTone);
};