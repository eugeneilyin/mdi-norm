import { createThemedIcon } from './utils/createThemedIcon';
import { IconBlockFilled } from './IconBlockFilled';
import { IconBlockOutlined } from './IconBlockOutlined';
import { IconBlockRounded } from './IconBlockRounded';
import { IconBlockSharp } from './IconBlockSharp';
import { IconBlockTwoTone } from './IconBlockTwoTone';
export var IconBlock =
/*#__PURE__*/
function IconBlock(props) {
  return createThemedIcon(props, IconBlockFilled, IconBlockOutlined, IconBlockRounded, IconBlockSharp, IconBlockTwoTone);
};