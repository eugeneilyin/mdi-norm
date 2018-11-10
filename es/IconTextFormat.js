import { createThemedIcon } from './utils/createThemedIcon';
import { IconTextFormatFilled } from './IconTextFormatFilled';
import { IconTextFormatOutlined } from './IconTextFormatOutlined';
import { IconTextFormatRounded } from './IconTextFormatRounded';
import { IconTextFormatSharp } from './IconTextFormatSharp';
import { IconTextFormatTwoTone } from './IconTextFormatTwoTone';
export var IconTextFormat =
/*#__PURE__*/
function IconTextFormat(props) {
  return createThemedIcon(props, IconTextFormatFilled, IconTextFormatOutlined, IconTextFormatRounded, IconTextFormatSharp, IconTextFormatTwoTone);
};