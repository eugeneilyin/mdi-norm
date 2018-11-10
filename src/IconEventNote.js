import { createThemedIcon } from './utils/createThemedIcon'
import { IconEventNoteFilled } from './IconEventNoteFilled'
import { IconEventNoteOutlined } from './IconEventNoteOutlined'
import { IconEventNoteRounded } from './IconEventNoteRounded'
import { IconEventNoteSharp } from './IconEventNoteSharp'
import { IconEventNoteTwoTone } from './IconEventNoteTwoTone'

export const IconEventNote = /*#__PURE__*/ props =>
  createThemedIcon(props, IconEventNoteFilled, IconEventNoteOutlined, IconEventNoteRounded, IconEventNoteSharp, IconEventNoteTwoTone)
