import { createThemedIcon } from './utils/createThemedIcon'
import { IconNoteFilled } from './IconNoteFilled'
import { IconNoteOutlined } from './IconNoteOutlined'
import { IconNoteRounded } from './IconNoteRounded'
import { IconNoteSharp } from './IconNoteSharp'
import { IconNoteTwoTone } from './IconNoteTwoTone'

export const IconNote = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNoteFilled, IconNoteOutlined, IconNoteRounded, IconNoteSharp, IconNoteTwoTone)
