import { createThemedIcon } from './utils/createThemedIcon'
import { IconNoteAddFilled } from './IconNoteAddFilled'
import { IconNoteAddOutlined } from './IconNoteAddOutlined'
import { IconNoteAddRounded } from './IconNoteAddRounded'
import { IconNoteAddSharp } from './IconNoteAddSharp'
import { IconNoteAddTwoTone } from './IconNoteAddTwoTone'

export const IconNoteAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNoteAddFilled, IconNoteAddOutlined, IconNoteAddRounded, IconNoteAddSharp, IconNoteAddTwoTone)
