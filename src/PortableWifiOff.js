import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPortableWifiOff } from './FilledPortableWifiOff'
import { OutlinePortableWifiOff } from './OutlinePortableWifiOff'
import { RoundPortableWifiOff } from './RoundPortableWifiOff'
import { SharpPortableWifiOff } from './SharpPortableWifiOff'
import { TwoTonePortableWifiOff } from './TwoTonePortableWifiOff'

export const PortableWifiOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPortableWifiOff, OutlinePortableWifiOff, RoundPortableWifiOff, SharpPortableWifiOff, TwoTonePortableWifiOff)
