import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGridOff } from './FilledGridOff'
import { OutlineGridOff } from './OutlineGridOff'
import { RoundGridOff } from './RoundGridOff'
import { SharpGridOff } from './SharpGridOff'
import { TwoToneGridOff } from './TwoToneGridOff'

export const GridOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGridOff, OutlineGridOff, RoundGridOff, SharpGridOff, TwoToneGridOff)
