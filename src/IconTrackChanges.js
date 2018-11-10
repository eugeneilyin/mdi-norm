import { createThemedIcon } from './utils/createThemedIcon'
import { IconTrackChangesFilled } from './IconTrackChangesFilled'
import { IconTrackChangesOutlined } from './IconTrackChangesOutlined'
import { IconTrackChangesRounded } from './IconTrackChangesRounded'
import { IconTrackChangesSharp } from './IconTrackChangesSharp'
import { IconTrackChangesTwoTone } from './IconTrackChangesTwoTone'

export const IconTrackChanges = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTrackChangesFilled, IconTrackChangesOutlined, IconTrackChangesRounded, IconTrackChangesSharp, IconTrackChangesTwoTone)
