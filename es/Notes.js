import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNotes } from './FilledNotes';
import { OutlineNotes } from './OutlineNotes';
import { RoundNotes } from './RoundNotes';
import { SharpNotes } from './SharpNotes';
import { TwoToneNotes } from './TwoToneNotes';
export var Notes =
/*#__PURE__*/
function Notes(props) {
  return createThemedIcon(props, FilledNotes, OutlineNotes, RoundNotes, SharpNotes, TwoToneNotes);
};