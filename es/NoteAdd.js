import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNoteAdd } from './FilledNoteAdd';
import { OutlineNoteAdd } from './OutlineNoteAdd';
import { RoundNoteAdd } from './RoundNoteAdd';
import { SharpNoteAdd } from './SharpNoteAdd';
import { TwoToneNoteAdd } from './TwoToneNoteAdd';
export var NoteAdd =
/*#__PURE__*/
function NoteAdd(props) {
  return createThemedIcon(props, FilledNoteAdd, OutlineNoteAdd, RoundNoteAdd, SharpNoteAdd, TwoToneNoteAdd);
};