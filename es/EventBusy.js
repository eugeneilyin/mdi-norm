import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEventBusy } from './FilledEventBusy';
import { OutlineEventBusy } from './OutlineEventBusy';
import { RoundEventBusy } from './RoundEventBusy';
import { SharpEventBusy } from './SharpEventBusy';
import { TwoToneEventBusy } from './TwoToneEventBusy';
export var EventBusy =
/*#__PURE__*/
function EventBusy(props) {
  return createThemedIcon(props, FilledEventBusy, OutlineEventBusy, RoundEventBusy, SharpEventBusy, TwoToneEventBusy);
};