import { createThemedIcon } from './utils/createThemedIcon';
import { IconFormatSizeFilled } from './IconFormatSizeFilled';
import { IconFormatSizeOutlined } from './IconFormatSizeOutlined';
import { IconFormatSizeRounded } from './IconFormatSizeRounded';
import { IconFormatSizeSharp } from './IconFormatSizeSharp';
import { IconFormatSizeTwoTone } from './IconFormatSizeTwoTone';
export var IconFormatSize =
/*#__PURE__*/
function IconFormatSize(props) {
  return createThemedIcon(props, IconFormatSizeFilled, IconFormatSizeOutlined, IconFormatSizeRounded, IconFormatSizeSharp, IconFormatSizeTwoTone);
};