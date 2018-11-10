import { createThemedIcon } from './utils/createThemedIcon';
import { IconImageFilled } from './IconImageFilled';
import { IconImageOutlined } from './IconImageOutlined';
import { IconImageRounded } from './IconImageRounded';
import { IconImageSharp } from './IconImageSharp';
import { IconImageTwoTone } from './IconImageTwoTone';
export var IconImage =
/*#__PURE__*/
function IconImage(props) {
  return createThemedIcon(props, IconImageFilled, IconImageOutlined, IconImageRounded, IconImageSharp, IconImageTwoTone);
};