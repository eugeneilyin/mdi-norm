import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLaptopChromebook } from './FilledLaptopChromebook'
import { OutlineLaptopChromebook } from './OutlineLaptopChromebook'
import { RoundLaptopChromebook } from './RoundLaptopChromebook'
import { SharpLaptopChromebook } from './SharpLaptopChromebook'
import { TwoToneLaptopChromebook } from './TwoToneLaptopChromebook'

export const LaptopChromebook = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLaptopChromebook, OutlineLaptopChromebook, RoundLaptopChromebook, SharpLaptopChromebook, TwoToneLaptopChromebook)
