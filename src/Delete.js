import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDelete } from './FilledDelete'
import { OutlineDelete } from './OutlineDelete'
import { RoundDelete } from './RoundDelete'
import { SharpDelete } from './SharpDelete'
import { TwoToneDelete } from './TwoToneDelete'

export const Delete = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDelete, OutlineDelete, RoundDelete, SharpDelete, TwoToneDelete)
