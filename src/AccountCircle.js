import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAccountCircle } from './FilledAccountCircle'
import { OutlineAccountCircle } from './OutlineAccountCircle'
import { RoundAccountCircle } from './RoundAccountCircle'
import { SharpAccountCircle } from './SharpAccountCircle'
import { TwoToneAccountCircle } from './TwoToneAccountCircle'

export const AccountCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAccountCircle, OutlineAccountCircle, RoundAccountCircle, SharpAccountCircle, TwoToneAccountCircle)
