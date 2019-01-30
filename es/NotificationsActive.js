import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNotificationsActive } from './FilledNotificationsActive';
import { OutlineNotificationsActive } from './OutlineNotificationsActive';
import { RoundNotificationsActive } from './RoundNotificationsActive';
import { SharpNotificationsActive } from './SharpNotificationsActive';
import { TwoToneNotificationsActive } from './TwoToneNotificationsActive';
export var NotificationsActive =
/*#__PURE__*/
function NotificationsActive(props) {
  return createThemedIcon(props, FilledNotificationsActive, OutlineNotificationsActive, RoundNotificationsActive, SharpNotificationsActive, TwoToneNotificationsActive);
};