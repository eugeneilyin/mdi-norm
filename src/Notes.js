import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNotes } from './FilledNotes'
import { OutlineNotes } from './OutlineNotes'
import { RoundNotes } from './RoundNotes'
import { SharpNotes } from './SharpNotes'
import { TwoToneNotes } from './TwoToneNotes'

export const Notes = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNotes, OutlineNotes, RoundNotes, SharpNotes, TwoToneNotes)
