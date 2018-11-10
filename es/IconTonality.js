import { createThemedIcon } from './utils/createThemedIcon';
import { IconTonalityFilled } from './IconTonalityFilled';
import { IconTonalityOutlined } from './IconTonalityOutlined';
import { IconTonalityRounded } from './IconTonalityRounded';
import { IconTonalitySharp } from './IconTonalitySharp';
import { IconTonalityTwoTone } from './IconTonalityTwoTone';
export var IconTonality =
/*#__PURE__*/
function IconTonality(props) {
  return createThemedIcon(props, IconTonalityFilled, IconTonalityOutlined, IconTonalityRounded, IconTonalitySharp, IconTonalityTwoTone);
};