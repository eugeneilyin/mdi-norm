import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLooksOne } from './FilledLooksOne'
import { OutlineLooksOne } from './OutlineLooksOne'
import { RoundLooksOne } from './RoundLooksOne'
import { SharpLooksOne } from './SharpLooksOne'
import { TwoToneLooksOne } from './TwoToneLooksOne'

export const LooksOne = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLooksOne, OutlineLooksOne, RoundLooksOne, SharpLooksOne, TwoToneLooksOne)
