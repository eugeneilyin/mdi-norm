import { createThemedIcon } from './utils/createThemedIcon'
import { FilledUsb } from './FilledUsb'
import { OutlineUsb } from './OutlineUsb'
import { RoundUsb } from './RoundUsb'
import { SharpUsb } from './SharpUsb'
import { TwoToneUsb } from './TwoToneUsb'

export const Usb = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledUsb, OutlineUsb, RoundUsb, SharpUsb, TwoToneUsb)
