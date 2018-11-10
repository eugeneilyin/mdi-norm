import { createThemedIcon } from './utils/createThemedIcon';
import { IconLabelFilled } from './IconLabelFilled';
import { IconLabelOutlined } from './IconLabelOutlined';
import { IconLabelRounded } from './IconLabelRounded';
import { IconLabelSharp } from './IconLabelSharp';
import { IconLabelTwoTone } from './IconLabelTwoTone';
export var IconLabel =
/*#__PURE__*/
function IconLabel(props) {
  return createThemedIcon(props, IconLabelFilled, IconLabelOutlined, IconLabelRounded, IconLabelSharp, IconLabelTwoTone);
};