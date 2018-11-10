import { createThemedIcon } from './utils/createThemedIcon'
import { IconUndoFilled } from './IconUndoFilled'
import { IconUndoOutlined } from './IconUndoOutlined'
import { IconUndoRounded } from './IconUndoRounded'
import { IconUndoSharp } from './IconUndoSharp'
import { IconUndoTwoTone } from './IconUndoTwoTone'

export const IconUndo = /*#__PURE__*/ props =>
  createThemedIcon(props, IconUndoFilled, IconUndoOutlined, IconUndoRounded, IconUndoSharp, IconUndoTwoTone)
