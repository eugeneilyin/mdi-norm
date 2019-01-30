import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEdit } from './FilledEdit'
import { OutlineEdit } from './OutlineEdit'
import { RoundEdit } from './RoundEdit'
import { SharpEdit } from './SharpEdit'
import { TwoToneEdit } from './TwoToneEdit'

export const Edit = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEdit, OutlineEdit, RoundEdit, SharpEdit, TwoToneEdit)
