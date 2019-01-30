import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRestoreFromTrash } from './FilledRestoreFromTrash'
import { OutlineRestoreFromTrash } from './OutlineRestoreFromTrash'
import { RoundRestoreFromTrash } from './RoundRestoreFromTrash'
import { SharpRestoreFromTrash } from './SharpRestoreFromTrash'
import { TwoToneRestoreFromTrash } from './TwoToneRestoreFromTrash'

export const RestoreFromTrash = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRestoreFromTrash, OutlineRestoreFromTrash, RoundRestoreFromTrash, SharpRestoreFromTrash, TwoToneRestoreFromTrash)
