import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNote } from './FilledNote';
import { OutlineNote } from './OutlineNote';
import { RoundNote } from './RoundNote';
import { SharpNote } from './SharpNote';
import { TwoToneNote } from './TwoToneNote';
export var Note =
/*#__PURE__*/
function Note(props) {
  return createThemedIcon(props, FilledNote, OutlineNote, RoundNote, SharpNote, TwoToneNote);
};