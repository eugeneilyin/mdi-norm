import { createThemedIcon } from './utils/createThemedIcon';
import { IconGestureFilled } from './IconGestureFilled';
import { IconGestureOutlined } from './IconGestureOutlined';
import { IconGestureRounded } from './IconGestureRounded';
import { IconGestureSharp } from './IconGestureSharp';
import { IconGestureTwoTone } from './IconGestureTwoTone';
export var IconGesture =
/*#__PURE__*/
function IconGesture(props) {
  return createThemedIcon(props, IconGestureFilled, IconGestureOutlined, IconGestureRounded, IconGestureSharp, IconGestureTwoTone);
};