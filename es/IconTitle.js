import { createThemedIcon } from './utils/createThemedIcon';
import { IconTitleFilled } from './IconTitleFilled';
import { IconTitleOutlined } from './IconTitleOutlined';
import { IconTitleRounded } from './IconTitleRounded';
import { IconTitleSharp } from './IconTitleSharp';
import { IconTitleTwoTone } from './IconTitleTwoTone';
export var IconTitle =
/*#__PURE__*/
function IconTitle(props) {
  return createThemedIcon(props, IconTitleFilled, IconTitleOutlined, IconTitleRounded, IconTitleSharp, IconTitleTwoTone);
};