import { createThemedIcon } from './utils/createThemedIcon';
import { IconExtensionFilled } from './IconExtensionFilled';
import { IconExtensionOutlined } from './IconExtensionOutlined';
import { IconExtensionRounded } from './IconExtensionRounded';
import { IconExtensionSharp } from './IconExtensionSharp';
import { IconExtensionTwoTone } from './IconExtensionTwoTone';
export var IconExtension =
/*#__PURE__*/
function IconExtension(props) {
  return createThemedIcon(props, IconExtensionFilled, IconExtensionOutlined, IconExtensionRounded, IconExtensionSharp, IconExtensionTwoTone);
};