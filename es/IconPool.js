import { createThemedIcon } from './utils/createThemedIcon';
import { IconPoolFilled } from './IconPoolFilled';
import { IconPoolOutlined } from './IconPoolOutlined';
import { IconPoolRounded } from './IconPoolRounded';
import { IconPoolSharp } from './IconPoolSharp';
import { IconPoolTwoTone } from './IconPoolTwoTone';
export var IconPool =
/*#__PURE__*/
function IconPool(props) {
  return createThemedIcon(props, IconPoolFilled, IconPoolOutlined, IconPoolRounded, IconPoolSharp, IconPoolTwoTone);
};