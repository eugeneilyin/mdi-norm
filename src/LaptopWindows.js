import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLaptopWindows } from './FilledLaptopWindows'
import { OutlineLaptopWindows } from './OutlineLaptopWindows'
import { RoundLaptopWindows } from './RoundLaptopWindows'
import { SharpLaptopWindows } from './SharpLaptopWindows'
import { TwoToneLaptopWindows } from './TwoToneLaptopWindows'

export const LaptopWindows = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLaptopWindows, OutlineLaptopWindows, RoundLaptopWindows, SharpLaptopWindows, TwoToneLaptopWindows)
