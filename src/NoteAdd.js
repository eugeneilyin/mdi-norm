import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNoteAdd } from './FilledNoteAdd'
import { OutlineNoteAdd } from './OutlineNoteAdd'
import { RoundNoteAdd } from './RoundNoteAdd'
import { SharpNoteAdd } from './SharpNoteAdd'
import { TwoToneNoteAdd } from './TwoToneNoteAdd'

export const NoteAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNoteAdd, OutlineNoteAdd, RoundNoteAdd, SharpNoteAdd, TwoToneNoteAdd)
