import { createThemedIcon } from './utils/createThemedIcon';
import { IconControlPointFilled } from './IconControlPointFilled';
import { IconControlPointOutlined } from './IconControlPointOutlined';
import { IconControlPointRounded } from './IconControlPointRounded';
import { IconControlPointSharp } from './IconControlPointSharp';
import { IconControlPointTwoTone } from './IconControlPointTwoTone';
export var IconControlPoint =
/*#__PURE__*/
function IconControlPoint(props) {
  return createThemedIcon(props, IconControlPointFilled, IconControlPointOutlined, IconControlPointRounded, IconControlPointSharp, IconControlPointTwoTone);
};