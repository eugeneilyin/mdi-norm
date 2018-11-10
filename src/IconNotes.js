import { createThemedIcon } from './utils/createThemedIcon'
import { IconNotesFilled } from './IconNotesFilled'
import { IconNotesOutlined } from './IconNotesOutlined'
import { IconNotesRounded } from './IconNotesRounded'
import { IconNotesSharp } from './IconNotesSharp'
import { IconNotesTwoTone } from './IconNotesTwoTone'

export const IconNotes = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNotesFilled, IconNotesOutlined, IconNotesRounded, IconNotesSharp, IconNotesTwoTone)
