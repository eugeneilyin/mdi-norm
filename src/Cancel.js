import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCancel } from './FilledCancel'
import { OutlineCancel } from './OutlineCancel'
import { RoundCancel } from './RoundCancel'
import { SharpCancel } from './SharpCancel'
import { TwoToneCancel } from './TwoToneCancel'

export const Cancel = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCancel, OutlineCancel, RoundCancel, SharpCancel, TwoToneCancel)
