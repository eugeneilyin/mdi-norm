import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNotificationsPaused } from './FilledNotificationsPaused';
import { OutlineNotificationsPaused } from './OutlineNotificationsPaused';
import { RoundNotificationsPaused } from './RoundNotificationsPaused';
import { SharpNotificationsPaused } from './SharpNotificationsPaused';
import { TwoToneNotificationsPaused } from './TwoToneNotificationsPaused';
export var NotificationsPaused =
/*#__PURE__*/
function NotificationsPaused(props) {
  return createThemedIcon(props, FilledNotificationsPaused, OutlineNotificationsPaused, RoundNotificationsPaused, SharpNotificationsPaused, TwoToneNotificationsPaused);
};