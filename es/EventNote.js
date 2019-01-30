import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEventNote } from './FilledEventNote';
import { OutlineEventNote } from './OutlineEventNote';
import { RoundEventNote } from './RoundEventNote';
import { SharpEventNote } from './SharpEventNote';
import { TwoToneEventNote } from './TwoToneEventNote';
export var EventNote =
/*#__PURE__*/
function EventNote(props) {
  return createThemedIcon(props, FilledEventNote, OutlineEventNote, RoundEventNote, SharpEventNote, TwoToneEventNote);
};