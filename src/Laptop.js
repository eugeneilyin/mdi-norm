import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLaptop } from './FilledLaptop'
import { OutlineLaptop } from './OutlineLaptop'
import { RoundLaptop } from './RoundLaptop'
import { SharpLaptop } from './SharpLaptop'
import { TwoToneLaptop } from './TwoToneLaptop'

export const Laptop = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLaptop, OutlineLaptop, RoundLaptop, SharpLaptop, TwoToneLaptop)
