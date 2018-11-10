import { createThemedIcon } from './utils/createThemedIcon';
import { IconDetailsFilled } from './IconDetailsFilled';
import { IconDetailsOutlined } from './IconDetailsOutlined';
import { IconDetailsRounded } from './IconDetailsRounded';
import { IconDetailsSharp } from './IconDetailsSharp';
import { IconDetailsTwoTone } from './IconDetailsTwoTone';
export var IconDetails =
/*#__PURE__*/
function IconDetails(props) {
  return createThemedIcon(props, IconDetailsFilled, IconDetailsOutlined, IconDetailsRounded, IconDetailsSharp, IconDetailsTwoTone);
};