import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLaptopMac } from './FilledLaptopMac'
import { OutlineLaptopMac } from './OutlineLaptopMac'
import { RoundLaptopMac } from './RoundLaptopMac'
import { SharpLaptopMac } from './SharpLaptopMac'
import { TwoToneLaptopMac } from './TwoToneLaptopMac'

export const LaptopMac = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLaptopMac, OutlineLaptopMac, RoundLaptopMac, SharpLaptopMac, TwoToneLaptopMac)
