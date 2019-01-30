import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNote } from './FilledNote'
import { OutlineNote } from './OutlineNote'
import { RoundNote } from './RoundNote'
import { SharpNote } from './SharpNote'
import { TwoToneNote } from './TwoToneNote'

export const Note = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNote, OutlineNote, RoundNote, SharpNote, TwoToneNote)
