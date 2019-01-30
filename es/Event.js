import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEvent } from './FilledEvent';
import { OutlineEvent } from './OutlineEvent';
import { RoundEvent } from './RoundEvent';
import { SharpEvent } from './SharpEvent';
import { TwoToneEvent } from './TwoToneEvent';
export var Event =
/*#__PURE__*/
function Event(props) {
  return createThemedIcon(props, FilledEvent, OutlineEvent, RoundEvent, SharpEvent, TwoToneEvent);
};