import { createThemedIcon } from './utils/createThemedIcon';
import { Filled3DRotation } from './Filled3DRotation';
import { Outline3DRotation } from './Outline3DRotation';
import { Round3DRotation } from './Round3DRotation';
import { Sharp3DRotation } from './Sharp3DRotation';
import { TwoTone3DRotation } from './TwoTone3DRotation';
export var Icon3DRotation =
/*#__PURE__*/
function Icon3DRotation(props) {
  return createThemedIcon(props, Filled3DRotation, Outline3DRotation, Round3DRotation, Sharp3DRotation, TwoTone3DRotation);
};