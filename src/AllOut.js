import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAllOut } from './FilledAllOut'
import { OutlineAllOut } from './OutlineAllOut'
import { RoundAllOut } from './RoundAllOut'
import { SharpAllOut } from './SharpAllOut'
import { TwoToneAllOut } from './TwoToneAllOut'

export const AllOut = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAllOut, OutlineAllOut, RoundAllOut, SharpAllOut, TwoToneAllOut)
