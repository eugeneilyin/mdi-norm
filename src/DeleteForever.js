import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDeleteForever } from './FilledDeleteForever'
import { OutlineDeleteForever } from './OutlineDeleteForever'
import { RoundDeleteForever } from './RoundDeleteForever'
import { SharpDeleteForever } from './SharpDeleteForever'
import { TwoToneDeleteForever } from './TwoToneDeleteForever'

export const DeleteForever = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDeleteForever, OutlineDeleteForever, RoundDeleteForever, SharpDeleteForever, TwoToneDeleteForever)
