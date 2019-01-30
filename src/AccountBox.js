import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAccountBox } from './FilledAccountBox'
import { OutlineAccountBox } from './OutlineAccountBox'
import { RoundAccountBox } from './RoundAccountBox'
import { SharpAccountBox } from './SharpAccountBox'
import { TwoToneAccountBox } from './TwoToneAccountBox'

export const AccountBox = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAccountBox, OutlineAccountBox, RoundAccountBox, SharpAccountBox, TwoToneAccountBox)
