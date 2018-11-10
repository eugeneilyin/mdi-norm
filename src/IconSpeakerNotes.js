import { createThemedIcon } from './utils/createThemedIcon'
import { IconSpeakerNotesFilled } from './IconSpeakerNotesFilled'
import { IconSpeakerNotesOutlined } from './IconSpeakerNotesOutlined'
import { IconSpeakerNotesRounded } from './IconSpeakerNotesRounded'
import { IconSpeakerNotesSharp } from './IconSpeakerNotesSharp'
import { IconSpeakerNotesTwoTone } from './IconSpeakerNotesTwoTone'

export const IconSpeakerNotes = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSpeakerNotesFilled, IconSpeakerNotesOutlined, IconSpeakerNotesRounded, IconSpeakerNotesSharp, IconSpeakerNotesTwoTone)
