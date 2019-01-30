import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDeleteOutline } from './FilledDeleteOutline'
import { OutlineDeleteOutline } from './OutlineDeleteOutline'
import { RoundDeleteOutline } from './RoundDeleteOutline'
import { SharpDeleteOutline } from './SharpDeleteOutline'
import { TwoToneDeleteOutline } from './TwoToneDeleteOutline'

export const DeleteOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDeleteOutline, OutlineDeleteOutline, RoundDeleteOutline, SharpDeleteOutline, TwoToneDeleteOutline)
