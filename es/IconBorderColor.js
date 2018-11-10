import { createThemedIcon } from './utils/createThemedIcon';
import { IconBorderColorFilled } from './IconBorderColorFilled';
import { IconBorderColorOutlined } from './IconBorderColorOutlined';
import { IconBorderColorRounded } from './IconBorderColorRounded';
import { IconBorderColorSharp } from './IconBorderColorSharp';
import { IconBorderColorTwoTone } from './IconBorderColorTwoTone';
export var IconBorderColor =
/*#__PURE__*/
function IconBorderColor(props) {
  return createThemedIcon(props, IconBorderColorFilled, IconBorderColorOutlined, IconBorderColorRounded, IconBorderColorSharp, IconBorderColorTwoTone);
};