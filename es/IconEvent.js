import { createThemedIcon } from './utils/createThemedIcon';
import { IconEventFilled } from './IconEventFilled';
import { IconEventOutlined } from './IconEventOutlined';
import { IconEventRounded } from './IconEventRounded';
import { IconEventSharp } from './IconEventSharp';
import { IconEventTwoTone } from './IconEventTwoTone';
export var IconEvent =
/*#__PURE__*/
function IconEvent(props) {
  return createThemedIcon(props, IconEventFilled, IconEventOutlined, IconEventRounded, IconEventSharp, IconEventTwoTone);
};