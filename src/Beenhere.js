import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBeenhere } from './FilledBeenhere'
import { OutlineBeenhere } from './OutlineBeenhere'
import { RoundBeenhere } from './RoundBeenhere'
import { SharpBeenhere } from './SharpBeenhere'
import { TwoToneBeenhere } from './TwoToneBeenhere'

export const Beenhere = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBeenhere, OutlineBeenhere, RoundBeenhere, SharpBeenhere, TwoToneBeenhere)
