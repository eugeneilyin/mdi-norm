import { createThemedIcon } from './utils/createThemedIcon';
import { IconSimCardFilled } from './IconSimCardFilled';
import { IconSimCardOutlined } from './IconSimCardOutlined';
import { IconSimCardRounded } from './IconSimCardRounded';
import { IconSimCardSharp } from './IconSimCardSharp';
import { IconSimCardTwoTone } from './IconSimCardTwoTone';
export var IconSimCard =
/*#__PURE__*/
function IconSimCard(props) {
  return createThemedIcon(props, IconSimCardFilled, IconSimCardOutlined, IconSimCardRounded, IconSimCardSharp, IconSimCardTwoTone);
};