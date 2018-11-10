import { createThemedIcon } from './utils/createThemedIcon';
import { IconDirectionsFilled } from './IconDirectionsFilled';
import { IconDirectionsOutlined } from './IconDirectionsOutlined';
import { IconDirectionsRounded } from './IconDirectionsRounded';
import { IconDirectionsSharp } from './IconDirectionsSharp';
import { IconDirectionsTwoTone } from './IconDirectionsTwoTone';
export var IconDirections =
/*#__PURE__*/
function IconDirections(props) {
  return createThemedIcon(props, IconDirectionsFilled, IconDirectionsOutlined, IconDirectionsRounded, IconDirectionsSharp, IconDirectionsTwoTone);
};