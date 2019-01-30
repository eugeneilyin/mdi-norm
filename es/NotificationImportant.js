import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNotificationImportant } from './FilledNotificationImportant';
import { OutlineNotificationImportant } from './OutlineNotificationImportant';
import { RoundNotificationImportant } from './RoundNotificationImportant';
import { SharpNotificationImportant } from './SharpNotificationImportant';
import { TwoToneNotificationImportant } from './TwoToneNotificationImportant';
export var NotificationImportant =
/*#__PURE__*/
function NotificationImportant(props) {
  return createThemedIcon(props, FilledNotificationImportant, OutlineNotificationImportant, RoundNotificationImportant, SharpNotificationImportant, TwoToneNotificationImportant);
};